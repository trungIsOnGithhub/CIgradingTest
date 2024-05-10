import os
import base64
import json

if __name__ == '__main__':
    exercise_ids = ['ex1']
    output = {}

    sample_json_input_string = '''
        {
            "ex1": [
                {"id": "ex1.1", "input":"WzgsOCw4LDgsOCw4XQ=="},
                {"id": "ex1.2", "input":"Wy05LC05LC05LC05XQ=="},
                {"id": "ex1.3", "input":"WzYsLTgsOSwtNl0="}
            ]
        }
    '''
    sample_json_input_parsed = json.loads(sample_json_input_string)

    print(sample_json_input_parsed)

    file = open('out.txt', 'a')
    file = open('in.txt', 'w')

    source_file_name = 'ex1'

    os.system('ghc ' + source_file_name + '.hs')
    os.system('./' + source_file_name)