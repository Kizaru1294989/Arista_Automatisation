import subprocess

def read_logs():
    try:
        # Run the journalctl command and capture the output
        process = subprocess.Popen(
            ["journalctl", "-u", "myapp.service", "-f"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        
        # Continuously read and print the output
        while True:
            output = process.stdout.readline()
            if output:
                print(output.strip())
            else:
                break

    except KeyboardInterrupt:
        print("Terminated by user")
    except Exception as e:
        print(f"An error occurred: {e}")


