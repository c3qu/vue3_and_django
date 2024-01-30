import os
import sys
import threading
from concurrent.futures import ThreadPoolExecutor

from multiprocessing.pool import ThreadPool

import requests


def download_file(url, folder_name):
    """
    Download a file from a URL and save it in a specified folder.

    Args:
        url: The URL of the file to download.
        folder_name: The name of the folder in which to save the file.
    """
    # Create the folder if it doesn't exist.
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)

    # Get the filename from the URL.
    filename = url.split("/")[-1]

    # Download the file.
    response = requests.get(url, verify=False)

    # Save the file to the specified folder.
    with open(os.path.join(folder_name, filename), "wb") as f:
        print(filename)
        f.write(response.content)


def main():
    # Create a list of the file URLs and folder names.
    # urls = [
    #     "https://down.ypppt.com/uploads/soft/210429/1-210429220354.zip",
    #     "https://down.ypppt.com/uploads/soft/160121/1-160121093627.rar",
    #     "https://down.ypppt.com/uploads/soft/180702/1-1PF2101604.zip",
    #     "https://down.ypppt.com/uploads/soft/210311/1-210311121922.zip",
    #     "https://down.ypppt.com/uploads/soft/200615/1-200615100450.zip"
    # ]
    f = open(sys.argv[1], "r")
    urls = f.readlines()
    # print(urls)
    f.close()
    file_names = [url.strip().split("/")[-1] for url in urls]
    print(file_names)
    print(len(set(file_names)))
    return
    folder_names = [url.strip().split("/")[-2] for url in urls]
    print(folder_names)
    # Create a list of threads.
    threads = []
    executor = ThreadPoolExecutor(max_workers=10)

    # Create a thread for each file and start it.
    for i, url in enumerate(urls):
        executor.submit(download_file, url.strip(), folder_names[i])
        # thread = threading.Thread(target=download_file, args=(url, folder_names[i]))
        # threads.append(thread)
        # thread.start()

    # Wait for all threads to finish.
    # for thread in threads:
    #     thread.join()

    # # Extract the contents of each zip file.
    # for folder_name in folder_names:
    #     zip_file_path = os.path.join(folder_name, folder_name + ".zip")
    #     extract_zip(zip_file_path)


if __name__ == "__main__":
    main()
