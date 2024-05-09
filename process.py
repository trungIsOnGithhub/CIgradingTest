import os
import base64
import json
from types import SimpleNamespace

status = os.system("./ex1/ex1")

# if status == 0:
#     print("OK")
# else:
#     throw Exception("Failed To Execute")

utilities_haskell_code = '\nstr_to_int :: String -> Int\nstr_to_int str = read str\nlist_str_to_int :: [String] -> [Int]\nlist_str_to_int [] = []\nlist_str_to_int (x:xs) = str_to_int x : list_str_to_int xs'

sample_json_input_string = '''
    {
        "ex1": [
            {"id": "ex1.2", "input":"WzgsOCw4LDgsOCw4XQ=="},
            {"id": "ex1.3", "input":"Wy05LC05LC05LC05XQ=="},
            {"id": "ex1.1", "input":"WzYsLTgsOSwtNl0="}
        ]
    }
'''

sample_json_input_parsed = json.loads(sample_json_input_string, object_hook=lambda d : SimpleNamespace(**d))

# print(hasattr(sample_json_input_parsed, 'ex1'))

exercise_1_driver_read_input_code = '\nmain :: IO()\nmain = do\n raw_input_str <- readFile("in.txt")\n let str_array = words raw_input_str'
exercise_1_solution_code = '\n '
exercise_1_driver_write_output_code = '\n let str = show str_array\n writeFile "out.txt" str'

def exercise_1_input_prepare(input_string, file_path):
    number_str_list = input_string[1:][:-1].split(',')

    file = open(file_path, 'w')

    for number_str in number_str_list:
        file.write(number_str + '\n')
def exercise_1_output_prepare(file_path):
    file = open(file_path, 'r')

    result = {}

    # loop through file line by line
    for line in file:
        line_encoded_bytes = line.encode('ascii')
        line_string_bytes = base64.b64encode(line_encoded_bytes)

        result['output'] = line_string_bytes
    return result


if __name__ == '__main__':
    exercise_ids = ['ex1']
    output = {}

    for attr in exercise_ids:
        if hasattr(sample_json_input_parsed, attr):
            test_info = getattr(sample_json_input_parsed, attr)

            # print(exercise_tests)
            # print(type(exercise_tests))
            if not os.path.isdir(attr):
                raise Exception('Test Directory Not Existed!! Invalid Format!!')

            output_list = []

            # for test in test_info:
            input_encoded_bytes = getattr(test_info[2], 'input').encode('ascii')
            input_string_bytes = base64.b64decode(input_encoded_bytes)
            input_string = input_string_bytes.decode('ascii')

            # print(input_string)
            # print(type(input_string))

            exercise_1_input_prepare(input_string, f"./in.txt")

            file = open(f'./{attr}/{attr}.hs', 'a')

            file.write(utilities_haskell_code)
            file.write(exercise_1_driver_read_input_code)
            file.write(exercise_1_solution_code)
            file.write(exercise_1_driver_write_output_code)

            output[attr] = exercise_1_output_prepare('out.txt')
        else:
            raise Exception('Test Not Existed!! Invalid Data!!')

    print(output)