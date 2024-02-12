module Main where

import System.Exit
import ToDo

str_to_int :: String -> Int
str_to_int str = read str

-- Helper
-- remove_first:: [a] -.

--testExercise1 :: Test
-- testExercise1 =
--    TestCase (assertEqual "Testing case 1" 2 (addNum 1 1))

-- testExercise2 :: Test
-- testExercise2 =
--    TestCase (assertEqual "Testing case 2" 10 (sumList [1, 2, 3, 4]))

main :: IO ()
main = do
    tests <- readFile "in0"
    let test_lines = lines tests

    print test_lines
    
    let num1s = head test_lines
    let num1 = str_to_int num1s
    let test_lines1 = tail test_lines

    print num1

    let num2s = head test_lines1
    let num2 = str_to_int num2s
    let test_lines2 = tail test_lines1

    print num2

    let num3s = head test_lines2
    let num3 = str_to_int num3s

    print num3

    let result1 = addNum num1 num2

    let outStr = show result1

    writeFile "out0" outStr


    -- Test Exercise 2

    tests <- readFile "in1"
    let test_lines = lines tests

    print test_lines
    
    let first_line = head test_lines

    let num_str_list = words first_line

    let num1s = num_str_list !! 0

    let num1 = str_to_int num1s

    -- print num1

    let num2s = num_str_list !! 1

    let num2 = str_to_int num2s

    -- print num2

    let num3s = num_str_list !! 2

    let num3 = str_to_int num3s

    -- print num3

    let list = [num1, num2, num3]

    let result1 = sumList list

    let outStr = show result1

    writeFile "out1" outStr