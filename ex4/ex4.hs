specialNumbers :: [Int]
specialNumbers = [x | x <- [1..100], x `mod` 7 == 0, x `mod` 5 > 0]