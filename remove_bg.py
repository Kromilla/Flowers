from PIL import Image
import os

def remove_magenta_bg(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        if not os.path.exists(input_path):
            print(f"Error: {input_path} does not exist")
            return
            
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Magenta threshold (FF00FF)
            # We want to be strict with magenta but allow some variation
            if item[0] > 150 and item[1] < 150 and item[2] > 150:
                newData.append((255, 255, 255, 0)) # Fully transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    brain_dir = r"C:\Users\WinterOS\.gemini\antigravity\brain\501aada2-e2ac-410a-8af8-a2265a49c9d7"
    public_dir = r"c:\Users\WinterOS\OneDrive\Desktop\Cliente\Flowers\public"
    
    # Process Butterfly
    remove_magenta_bg(
        os.path.join(brain_dir, "monarch_butterfly_pink_png_1773949031419.png"),
        os.path.join(public_dir, "monarch_real.png")
    )
    
    # Process Sunflower
    remove_magenta_bg(
        os.path.join(brain_dir, "sunflower_pink_bg_png_1773948583257.png"),
        os.path.join(public_dir, "sunflower_asset.png")
    )
