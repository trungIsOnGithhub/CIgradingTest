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
    -- tests <- readFile "tests"
    -- let test_lines = lines tests

    -- print test_lines
    
    -- let num1s = head test_lines
    -- let num1 = str_to_int num1s
    -- let test_lines1 = tail test_lines

    -- print num1

    -- let num2s = head test_lines1
    -- let num2 = str_to_int num2s
    -- let test_lines2 = tail test_lines1

    -- print num2

    -- let num3s = head test_lines2
    -- let num3 = str_to_int num3s

    -- print num3

    let num1 = -69

    let num2 = 69

    let result1 = addNum num1 num2

    writeFile outs result1

    -- if addNum num1 num2 /= num3 then do
    --    print "Test 1 failed"
    --    die "One case has failed, Stopped!"
    -- else print "Test 1 passed"

    -- if addNum 1 1 == 3 then do
    --    print "Test 2 failed"
    --    die "One case has failed, Stopped!"
    -- else print "Test 2 passed"