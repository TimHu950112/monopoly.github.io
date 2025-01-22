from opencc import OpenCC
import jsbeautifier

# Define file paths
input_path = "index.js"  # Replace with the path to your file
output_path = "index1.js"  # Replace with your desired output file path

# Load the provided JavaScript content (simplified Chinese)
with open(input_path, "r", encoding="utf-8") as file:
    js_content = file.read()

# Convert simplified Chinese to traditional Chinese
cc = OpenCC('s2t')  # 's2t' stands for Simplified to Traditional
js_content_traditional = cc.convert(js_content)

# Beautify the JavaScript code
beautifier_opts = jsbeautifier.default_options()
beautifier_opts.indent_size = 4
js_content_beautified = jsbeautifier.beautify(js_content_traditional, beautifier_opts)

# Save the transformed content to a new file
with open(output_path, "w", encoding="utf-8") as file:
    file.write(js_content_beautified)

print(f"File successfully converted and saved to: {output_path}")