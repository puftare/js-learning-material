# Bellman–Ford Algorithm

The Bellman–Ford algorithm is an algorithm that computes shortest
paths from a single source vertex to all of the other vertices
in a weighted digraph. It is slower than Dijkstra's algorithm
for the same problem, but more versatile, as it is capable of
handling graphs in which some of the edge weights are negative
numbers.

![Bellman-Ford](https://upload.wikimedia.org/wikipedia/commons/2/2e/Shortest_path_Dijkstra_vs_BellmanFord.gif)

## Complexity

Worst-case performance `O(|V||E|)`
Best-case performance `O(|E|)`
Worst-case space complexity `O(|V|)`
