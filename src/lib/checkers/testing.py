# a = 1
# b = 2
# c = 3
# c = a
# a = 6
# a = c
# print('a ' + str(a))
# print('b ' + str(b))
# print('c ' + str(c))

data = [{(0, 1):{'color':'blue', 'king':False}},
        {(0, 2):{'color':'blue', 'king':False}}]
for tile in data:
    print(tile[(0, 1)])

# list = [{'thing':{'color':'blue', 'king':False}}]
# print(list[0]['thing'])

# for i in range(len(data)):
#     print(data[i]['thing'])