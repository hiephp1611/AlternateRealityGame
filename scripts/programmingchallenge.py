

def main(NUMBER_LIST):
  for i, char in enumerate(NUMBER_LIST):
    if char == "0":
      before = NUMBER_LIST[i-1]
      after = NUMBER_LIST[i+1]
      NUMBER_LIST[i-1] = after
      NUMBER_LIST[i+1] = before

  print("".join(NUMBER_LIST))
  
  for i, char in enumerate(NUMBER_LIST):
    if char == "1":
      next1 = NUMBER_LIST[i+1]
      next2 = NUMBER_LIST[i+2]
      sum = int(next1) + int(next2)
      if sum > 9:
        sum = 9
      NUMBER_LIST[i+1] = str(sum)
      del NUMBER_LIST[i+2]
  
  print("".join(NUMBER_LIST))
  
  for i, char in enumerate(NUMBER_LIST):
    if char == "2":
      next = NUMBER_LIST[i+1]
      NUMBER_LIST[i] = next

  print("".join(NUMBER_LIST))
  
  for i, char in enumerate(NUMBER_LIST):
    if char == "3":
      fiveAhead = NUMBER_LIST[i+1:i+6]
      if "7" in fiveAhead:
        del NUMBER_LIST[i]

  print("".join(NUMBER_LIST))
  
  for i, char in enumerate(NUMBER_LIST):
    if char == "4":
      fourAhead = NUMBER_LIST[i+1:i+5]
      sum = 0
      for char in fourAhead:
        sum += int(char)
      if sum % 2 == 0:
        NUMBER_LIST[i] = "8"

  print("".join(NUMBER_LIST))
  
  for i, char in enumerate(NUMBER_LIST):
    if char == "5":
      del NUMBER_LIST[i-1]

  print("".join(NUMBER_LIST))
  
  for i, char in enumerate(NUMBER_LIST):
    if char == "6":
      del NUMBER_LIST[i]
      NUMBER_LIST.append("6")

  print("".join(NUMBER_LIST))
  
  for i, char in enumerate(NUMBER_LIST):
    if char == "7":
      j = 1
      while i + j < len(NUMBER_LIST):
        if isPrime(int(NUMBER_LIST[i+j])):
          if j > 9:
            j = 9
          NUMBER_LIST[i] = str(j)
          break
        j += 1

      if i + j >= len(NUMBER_LIST):
        NUMBER_LIST[i] = "0"
        
  print("".join(NUMBER_LIST))      

  for i, char in enumerate(NUMBER_LIST):
    if char == "8":
      count = NUMBER_LIST.count("8")
      filterednumbers = list(filter(lambda x: x != "8", NUMBER_LIST))
      filterednumbers.insert(i, str(count % 10))
      NUMBER_LIST = filterednumbers
      break

  print("".join(NUMBER_LIST))
  
  for i, char in enumerate(NUMBER_LIST):
    if char == "9":
      for j in range(i+1, len(NUMBER_LIST)):
        if NUMBER_LIST[j] == "1":
          del NUMBER_LIST[i]
          del NUMBER_LIST[j]
          break
      
  print("".join(NUMBER_LIST))
  #sum list
  sum = 0
  for char in NUMBER_LIST:
    sum += int(char)
  return sum

def isPrime(n):
  return n in [2, 3, 5, 7]

print(main(list("9236590123506283690126359012358013612834238750237865023650160189265189063258063250012639316518936518763491264891642124691961065346")))