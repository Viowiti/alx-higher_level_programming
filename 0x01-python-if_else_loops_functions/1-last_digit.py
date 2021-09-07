#!/usr/bin/python3
import random

number = random.randint(-10000, 10000)
to_string = str(number)
last_number_string = to_string[-1]
last_number = int(last_number_string)

if last_number == 0:
    print("Last digit of {0} is {1} and is 0".format(number, last_number))

elif last_number > 5:
    print("Last digit of {0} is {1} and is \
greater than 5".format(number, last_number))

elif last_number < 6 and not 0:
    print("Last digit of {0} is {1} and is \
less than 6 and not 0".format(number, last_number))
