/*
You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

    For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

 

Example 1:

Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
Output: ["JFK","MUC","LHR","SFO","SJC"]

Example 2:

Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.

 

Constraints:

    1 <= tickets.length <= 300
    tickets[i].length == 2
    fromi.length == 3
    toi.length == 3
    fromi and toi consist of uppercase English letters.
    fromi != toi

*/
/*
ntuition

    The problem requires finding a valid itinerary for a given list of flight tickets.
    The itinerary must start from "JFK" (John F. Kennedy International Airport) and visit all airports exactly once.
    This problem can be solved using depth-first search (DFS) on a directed graph, treating each airport as a node and each ticket as a directed edge.

Approach

    Create an adjacency list representation of the flights. Use an unordered_map where the key is the source airport, and the value is a multiset (sorted set) of destination airports. This allows multiple tickets to have the same source airport.

    Initialize an empty vector called result to store the final itinerary.

    Start the DFS traversal from the "JFK" airport. The goal is to visit all airports in a way that respects the lexicographically smallest order.

    In the DFS function:
        While there are destinations connected to the current airport:
        Get the next destination by picking the smallest destination lexicographically (because it's stored in a multiset).
        Remove this destination from the list to ensure it's not visited again.
        Recursively explore this destination.

    After finishing the DFS traversal, reverse the result vector. This is necessary because the DFS builds the itinerary in reverse order.

    Return the reversed result vector, which now contains the valid itinerary.

Complexity

    Time complexity:
    O(n * log(n))
        The time complexity is O(n * log(n)) for building the adjacency list and O(n * log(n)) for DFS traversal, which is often the dominant factor

    Space complexity:
    O(n * log(n))
        The space complexity is O(n * log(n)) for the adjacency list and O(n) for other data structures.

*/

class Solution {
    // Depth-first search function to find the itinerary
    dfs(adj, result, s) {
        // While there are destinations connected to the current airport
        while (adj[s].size) {
            // Get the next destination
            let v = adj[s].values().next().value;
            // Remove this destination from the list
            adj[s].delete(v);
            // Recursively explore this destination
            this.dfs(adj, result, v);
        }
        // Add the current airport to the result
        result.push(s);
    }

    findItinerary(tickets) {
        // Create an adjacency list to represent the flights
        const adj = new Map();
        for (const t of tickets) {
            if (!adj.has(t[0])) {
                adj.set(t[0], new Set());
            }
            adj.get(t[0]).add(t[1]);
        }

        // Initialize the result array
        const result = [];
        // Start the depth-first search from JFK (John F. Kennedy International Airport)
        this.dfs(adj, result, "JFK");
        // Reverse the result to get the correct itinerary
        result.reverse();
        // Return the itinerary
        return result;
    }
}
