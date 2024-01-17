module Main where

import System.Exit
import HaskellExercise

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
    tests <- readFile "test"
    let test_lines = lines(tests)
    
--    print test_lines
    
    let num1s = head test_lines
    let num1 = str_to_int num1s
    let test_lines1 = tail test_lines

    let num2s = head test_lines
    let num2 = str_to_int num2s
    let test_lines2 = tail test_lines1
    
    let num3s = head test_lines2
    let num3 = str_to_int num3s

    if addNum num1 num2 == num3 then print("Test 1 passed")
    else do
    	print("Test 1 failed")
    	die("One case has failed, Stopped!")

--    if sumList [1,2,0] == 4 then print("Test 2 passed")
--    else die("Test 2 failed")
-- runTestTTAndExit (TestList [testExercise1, testExercise2])
