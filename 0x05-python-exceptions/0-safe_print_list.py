#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):

    try:
        newlist = my_list[:x]
    except NameError:
        sys.exit(1)
    except TypeError:
        sys.exit(1)
    else:
        counter = 0
        for i in newlist:
            counter += 1
            print(i, end="")

    return counter
