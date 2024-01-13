module Main where

import System.Exit
import ToDo

-- testExercise1 :: Test
-- testExercise1 =
--    TestCase (assertEqual "Testing case 1" 2 (addNum 1 1))

-- testExercise2 :: Test
-- testExercise2 =
--    TestCase (assertEqual "Testing case 2" 10 (sumList [1, 2, 3, 4]))

main :: IO ()
main = do
    -- if addNum 1 1 == 2 then print("Exercise 1 passed")
    -- else die("Exercise 1 failed")

    -- if sumList [1,2,0] == 4 then print("Exercise 2 passed")
    -- else die("Exercise 2 failed")
    
    tests <- readFile "test"
    let lines_content = lines content
    print lines_content

-- runTestTTAndExit (TestList [testExercise1, testExercise2])
