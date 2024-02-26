
from Tools.Input.input import input_fabric, welcome
from Tools.Json.convert_to_json import save_to_json
import json
from Tools.Config.make_config_file import init


def main():
    print(welcome)
    fabric_info = input_fabric()
    admin_user = fabric_info['admin_user']
    admin_password = fabric_info['password']
    save_to_json(admin_user,admin_password,fabric_info)
    init()

if __name__ == '__main__':
    main()
