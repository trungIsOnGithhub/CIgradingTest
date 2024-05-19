pairsWithSum :: Int -> [Int] -> [(Int, Int)]
pairsWithSum total xs = [(x1, x2) | x1 <- xs, x2 <- xs, (x1 + x2) == total]