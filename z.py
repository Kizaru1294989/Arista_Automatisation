from jsonrpclib import Server

switch = Server ("http://cvpadmin:eve@10.43.193.148/")
response = switch.runCmds( 1, ["show version"] )
print(response)