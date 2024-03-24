module Main where

import ToDo

str_to_int :: String -> Int
str_to_int str = read str

list_str_to_int :: [String] -> [Int]
list_str_to_int [] = []
list_str_to_int (x:xs) = str_to_int x : list_str_to_int xs


execute_exercise_0 :: (String, String) -> IO()
execute_exercise_0 tuple = do
    {- 
        This Exercise read input of 2 numbers
        output a number
    -}
    raw_input_0 <- readFile (fst tuple)

    let input_str_list = words raw_input_0

    let input_list = list_str_to_int input_str_list

    let input0 = input_list !! 0
    let input1 = input_list !! 1

    let resultStr = show (addNum input0 input1)

    writeFile (snd tuple) resultStr


execute_exercise_1 :: (String, String) -> IO()
execute_exercise_1 tuple = do
    {- 
        This Exercise read input of List
        output a number
    -}
    raw_input_1 <- readFile (fst tuple)
    let input_str_list = words raw_input_1

    let input_list = list_str_to_int input_str_list

    let resultStr = show (sumList input_list)

    writeFile (snd tuple) resultStr


execute_exercise_2 :: (String, String) -> IO()
execute_exercise_2 tuple = do
    {- 
        This Exercise read input of String
        output a String
    -}
    raw_input_2 <- readFile (fst tuple)
    let input_str_list = words raw_input_2

    let input = str_to_int (input_str_list !! 0)

    let resultStr = show (grayCode input)

    writeFile (snd tuple) resultStr


main :: IO ()
main = do
    execute_exercise_0 ("in0test1", "out0test1")
    execute_exercise_1 ("in1test1", "out1test1")
    -- execute_exercise_2
