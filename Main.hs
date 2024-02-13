module Main where

import ToDo

str_to_int :: String -> Int
str_to_int str = read str

main :: IO ()
main = do
    -- TEST EXERCISE 1
    tests <- readFile "inexercise0test1"
    let test_lines = lines tests

    -- print test_lines
    
    let num1s = head test_lines
    let num1 = str_to_int num1s
    let test_lines1 = tail test_lines

    -- print num1

    let num2s = head test_lines1
    let num2 = str_to_int num2s
    let test_lines2 = tail test_lines1

    let result1 = addNum num1 num2
    let outStr = show result1
    writeFile "out0" outStr



    -- TEST EXERCISE 2

    tests4 <- readFile "inexercise1test1"
    let num_str_list = words tests4


    let num4s = num_str_list !! 0
    let num4 = str_to_int num4s


    let num5s = num_str_list !! 1
    let num5 = str_to_int num5s


    let num6s = num_str_list !! 2
    let num6 = str_to_int num6s


    let list = [num4, num5, num6]

    let result2 = sumList list
    let outStr2 = show result2
    writeFile "out1" outStr2