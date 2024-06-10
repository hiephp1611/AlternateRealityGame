from hashlib import sha256

# Change this to the first four digits of the phone number used in the ARG.
FIRST_FOUR_DIGITS = '0319'

# This will then over time print out valid clues. Put one of the generated numbers in the config file.
for i in range(10000000,100000000):
  digest = sha256(str(i).encode('utf-8')).hexdigest()
  if digest.startswith(FIRST_FOUR_DIGITS):
    print(i)
