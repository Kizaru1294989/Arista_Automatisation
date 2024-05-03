
from Labs.mlag import *
from Labs.bgp import *
from Labs.vxlan import *
from Labs.evpn import *

def main():
    print("MAIN")
    # mlag()
    # bgp()
    vxlan()
    # reponse = mlag()
    # if reponse :
    #     choice = input("Transofrm the Lab to BGP lab ? Y/N")
    #     if choice == "Y":
    #         bgp()
    #     elif choice == "N":
    #         exit(0)
        
    # else:
    #     exit(0)

if __name__ == '__main__':
    main()