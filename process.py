import os
import base64
import json

# status = os.system("./ex1/ex1")

# if status == 0:
#     print("OK")
# else:
#     throw Exception("Failed To Execute")

utilities_haskell_code = '\nstr_to_int :: String -> Int\nstr_to_int str = read str\nlist_str_to_int :: [String] -> [Int]\nlist_str_to_int [] = []\nlist_str_to_int (x:xs) = str_to_int x : list_str_to_int xs'

exercise_1_driver_read_input_code = '\nmain :: IO()\nmain = do\n raw_input_str <- readFile("in.txt")\n let str_list = words raw_input_str'
exercise_1_solution_code = '\n let input_list = list_str_to_int str_list\n let str_result = (show (exercise1 input_list))'
exercise_1_driver_write_output_code = '\n let str = show str_array\n writeFile "out.txt" str'

def exercise_1_input_prepare(input_string, file_path):
    number_str_list = input_string[1:][:-1].split(',')

    file = open(file_path, 'w')

    for number_str in number_str_list:
        file.write(number_str + '\n')
def exercise_1_output_prepare(file_path):
    file = open(file_path, 'r')

    # loop through file line by line
    line_encoded_bytes = line.encode('ascii')
    line_string_bytes = base64.b64encode(line_encoded_bytes)

    return line_string_bytes


def exercise_1_input_prepare(input_string, file_path):
    number_str_list = input_string.split(',')

    file = open(file_path, 'w')

    for number_str in number_str_list:
        file.write(number_str + '\n')

# def get_json_input_string():
#     return 


if __name__ == '__main__':
    exercise_ids = ['ex1', 'ex2']
    output = {}

    sample_json_input_string = '''
        {
            "ex1": [
                {"id": "ex1.1", "input":"WzgsOCw4LDgsOCw4XQ=="},
                {"id": "ex1.2", "input":"Wy05LC05LC05LC05XQ=="},
                {"id": "ex1.3", "input":"WzYsLTgsOSwtNl0="}
            ],
            "ex2": [
                {"id": "ex2.1", "input":"MiwyMDIw"},
                {"id": "ex2.2", "input":"NSwyMDE3"}        
            ]
        }
    '''
    sample_json_input_parsed = json.loads(sample_json_input_string)

    print(sample_json_input_parsed)

    for attr in exercise_ids:
        test_info = sample_json_input_parsed[attr]

        print(test_info)

        if test_info is None:
            raise Exception('Test Not Existed!! Invalid Data!!')

        # print(exercise_tests)
        # print(type(exercise_tests))
        if not os.path.isdir(attr):
            raise Exception('Test Directory Not Existed!! Invalid Format!!')

        output_list = []

        for test in test_info:
            input_encoded_bytes = test['input'].encode('ascii')
            input_string_bytes = base64.b64decode(input_encoded_bytes)
            input_string = input_string_bytes.decode('ascii')

            print(input_string)
            # print(type(input_string))

            exercise_1_input_prepare(input_string, "./in.txt")

            source_file_path = f'./{attr}/{attr}.hs'
            file = open(source_file_path, 'a')

            print(source_file_path)

            file.write(utilities_haskell_code)
            file.write(exercise_1_driver_read_input_code)
            file.write(exercise_1_solution_code)
            file.write(exercise_1_driver_write_output_code)

            status = os.system('ghc ' + source_file_path)
            if status != 0:
                raise Exception('Cannot Compile Haskell Source')
            status = os.system(f'./{attr}/{attr}')
            if status != 0:
                raise Exception('Cannot Execute Haskell Binaries')

            this_test_result = {}
            this_test_result.id = test['id']
            this_test_result.output = exercise_1_output_prepare('out.txt')

            output_list.append(this_test_result)

        output[attr] = output_list

    print(output)