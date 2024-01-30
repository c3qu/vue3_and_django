import os
import shutil
import sys


def copy_files(src_dir, dest_dir):
    """
    Copy all files from a source directory to a destination directory.

    Args:
        src_dir: The source directory.
        dest_dir: The destination directory.
    """
    # Create the destination directory if it doesn't exist.
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    # Iterate over the files in the source directory.
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            src_file = os.path.join(root, file)
            shutil.copy2(src_file, dest_dir)


def delete_files(src_dir):
    """
    Copy all files from a source directory to a destination directory.

    Args:
        src_dir: The source directory.
        dest_dir: The destination directory.
    """
    count = 0
    # Iterate over the files in the source directory.
    for root, dirs, files in os.walk(src_dir):
        print(len(files))
        for file in files:
            if "jpg" in file:
                count += 1
                continue
            print(file)
            if "_" in file and "jpg" in file:
                src_file = os.path.join(root, file)
                # shutil.rmtree(src_file)
                # os.remove(src_file)
    print(count)


def main():
    # Get the source directory from the command line.
    filename = sys.argv[1]
    f = open(filename, "r")
    urls = f.readlines()
    # print(urls)
    filenames = [url.strip().split("/")[-1] for url in urls]
    # print(filenames)
    dir_name = sys.argv[2]
    files_list = []
    for root, dirs, files in os.walk(dir_name):
        files_list += files
    for filename in filenames:
        if filename not in files_list:
            print(filename)
    # Get the destination directory from the command line.
    # dest_dir = sys.argv[2]

    # Copy the files from the source directory to the destination directory.
    # copy_files(src_dir, dest_dir)
    # delete_files(src_dir)


if __name__ == "__main__":
    main()
