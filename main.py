# Imports PIL module
from PIL import Image, ImageDraw, ImageFont

# creating a image object (new image object) with
# RGB mode and size 200x200
im = Image.new(mode="RGB", size=(200, 200))

ctx = ImageDraw.ImageDraw(im)

# why is it called consolab lmao?
font = ImageFont.truetype("consolab.ttf", size=200)

x, y, w, h = ctx.textbbox((0, 0), "*", font)

print(x, y, w, h)

ctx.text(((w - x) / 2, (h - y) / 2), "*", font=font, fill=(0, 255, 0))

# This method will show image in any image viewer
im.save("logo.png")
