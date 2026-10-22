#!/bin/bash

files=("./index.html" "./products.html")

for file in "${files[@]}"; do
  sed -i 's/Kem Mochi/Kem mochi/g' "$file"
  sed -i 's/Kem Chiên/Kem chiên/g' "$file"
  sed -i 's/Kem Gà Rán/Kem gà rán/g' "$file"
  sed -i 's/Kem Dừa/Kem dừa/g' "$file"
  sed -i 's/Kem Vanilla/Kem vanilla/g' "$file"
  sed -i 's/Kem Chocolate/Kem chocolate/g' "$file"
  sed -i 's/Kem Matcha/Kem matcha/g' "$file"
  sed -i 's/Kem Caramel/Kem caramel/g' "$file"
  sed -i 's/Kem Chuối/Kem chuối/g' "$file"
  sed -i 's/Kem Mango/Kem mango/g' "$file"
done
