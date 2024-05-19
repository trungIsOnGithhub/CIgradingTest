isLeapYear :: Int -> Bool
isLeapYear year = (year `mod` 4 == 0) && (year `mod` 100 /= 0 || year `mod` 400 == 0)

daysInMonth :: Int -> Int -> Int
daysInMonth day month | (isLeapYear month) && (month == 2) = 29
                    | (month == 2) = 28
                    | (month < 8) && (month `mod` 2 /= 0) = 31
                    | (month < 8) && (month `mod` 2 /= 0) = 31
                    | (month >= 8) && (month `mod` 2 /= 0) = 30
                    | otherwise = 31
str_to_int :: String -> Int
str_to_int str = read str
list_str_to_int :: [String] -> [Int]
list_str_to_int [] = []
list_str_to_int (x:xs) = str_to_int x : list_str_to_int xs
main :: IO()
main = do
 raw_input_str <- readFile("in.txt")
 let str_list = words raw_input_str
 let input_list = list_str_to_int str_list
 let str_result = (show (daysInMonth (input_list !! 0) (input_list !! 1)))
 writeFile "out.txt" str_result