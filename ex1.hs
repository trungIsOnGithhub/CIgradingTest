help1 :: [Int] -> [Int]
help1 [] = []
help1 (x:xs) | x >= 0 = x : (help1 xs)
            | otherwise = help1 xs

help2 :: [Int] -> [Int]
help2 [] = []
help2 (x:xs) | x < 0 = x : (help2 xs)
            | otherwise = help2 xs

exercise1 :: [Int] -> ([Int],[Int])
exercise1 xs = ((help1 xs), (help2 xs))
