import math
y1 = 0
y2 = 0
y3 = 0

print("Start")

i = 0

print ("iteration = ", i + 1)
x1 = (5 + 2 * y2 - y3) / 6
x2 = (28 - 5 * y1 - y3) / 10
x3 = (44 +3 * y1 - y2) / 15

print("x1 = ", x1)
print("x2 = ", x2)
print("x3 = ", x3)



while i < 10:
  
  print ("iteration = ", i + 2)
  y1 = x1
  y2 = x2
  y3 = x3

  x1 = (5 + 2*y2 - y3) / 6
  x2 = (28 - 5*y1 - y3) / 10
  x3 = (44 +3*y1 - y2) / 15

  print("x1 = ", x1)
  print("x2 = ", x2)
  print("x3 = ", x3)


  i = i + 1



