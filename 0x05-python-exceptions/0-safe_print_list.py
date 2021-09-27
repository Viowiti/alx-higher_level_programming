#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):

    try:
        newlist = my_list[:x]
        for i in newlist:
            print(i, end="")
