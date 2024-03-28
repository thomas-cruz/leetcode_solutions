/*
The problem asks you to reconstruct a trip's itinerary given a list of airline tickets. The catch? You start from JFK airport, and if there are multiple valid itineraries, you should return the one that has the smallest lexical order.
Key Concepts and Constraints
What Makes This Problem Unique?

    Graph Theory:
    The problem can be modeled as a directed graph, where each airport is a node and each ticket represents a directed edge between airports.

    Lexical Order:
    Among multiple valid itineraries, the one with the smallest lexical order is preferred.

    Constraints:
        1 <= tickets.length <= 300
        Tickets are given as pairs [fromi, toi] of strings.
        Each string consists of 3 uppercase English letters.

Strategies to Tackle the Problem

    Recursive DFS:
    This approach leverages the stack memory implicitly during recursion to backtrack and form the itinerary.

    Iterative DFS:
    This approach explicitly uses a stack to perform DFS iteratively.

Recursive DFS Explained
Extended Explanation: Logic Behind the "Find Itinerary" Solution using Recursive DFS
What is Recursive DFS?

DFS, short for Depth-First Search, is a graph-traversal algorithm. In this specific problem, we use the recursive version of DFS, which exploits the call stack to keep track of the airports (vertices) that still need exploration.
The Intricacies of Recursive DFS in "Find Itinerary"

    Initialize the Graph:

        We start by initializing an adjacency list graph that will serve as a representation of the directed graph of flights. The graph is implemented as a defaultdict containing lists.

        The adjacency list is constructed by iterating over the given list of ticket pairs, where each pair consists of a source airport and a destination airport.

        These lists of destinations are sorted in reverse lexical order. This allows us to pop the last element to ensure that we are choosing the smallest lexical order when there are multiple options.

    DFS Traversal and Exploration:

        The traversal starts from the JFK airport, which is our initial point. We initiate a recursive DFS function that takes the current airport as an argument.

        Inside this function, we enter a loop that continues until we find an airport that has no more destinations left to visit. This is done by checking the adjacency list for each airport and popping the last element (which is the smallest in lexical order).

        During this process, we recursively call the DFS function for each new destination, essentially diving deeper into the graph.

    Backtrack and Construct Itinerary:

        Once we reach an airport with no outgoing edges, or in other words, no more destinations to visit, we start backtracking.

        During the backtracking phase, we add the current airport to our itinerary list. This list was initially empty and serves as the container for our final solution.

        Importantly, we are essentially building the itinerary in reverse during this phase because of the way DFS works. As we backtrack, we are popping from the call stack, revisiting the airports in the reverse order of how they will eventually appear in the itinerary.

    Reverse to Get the Final Itinerary:
        Since we constructed the itinerary in reverse, the final step is to reverse this list. This gives us the correct order of airports to visit, starting from JFK, and is our final solution.

Time and Space Complexity

    Time Complexity: O(Nlog⁡N)O(N \log N)O(NlogN) due to sorting the tickets.
    Space Complexity: O(N)O(N)O(N), for storing the graph and the itinerary.

*/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {};
    
    for (const [src, dst] of tickets) {
        if (!graph[src]) graph[src] = [];
        graph[src].push(dst);
    }
    
    for (const key in graph) {
        graph[key].sort().reverse();
    }
    
    const itinerary = [];
    
    function dfs(airport) {
        while (graph[airport] && graph[airport].length > 0) {
            dfs(graph[airport].pop());
        }
        itinerary.push(airport);
    }
    
    dfs("JFK");
    
    return itinerary.reverse();
};
/*
Iterative DFS Explained
How Does Iterative DFS Work?

Iterative DFS also starts by initializing the graph in the same manner as the recursive approach. The difference lies in the traversal and the building of the itinerary.

    Initialize Stack:
        We explicitly initialize a stack with "JFK" as the starting point.
    Iterative DFS Traversal:
        We use the stack to manage the DFS traversal. For each airport on the stack, we keep visiting its next available destination until it has no outgoing edges.
    Build Itinerary:
        During this process, we keep adding the current airport to the itinerary list.
    Reverse the Itinerary:
        Finally, we reverse the itinerary list to get the final itinerary in correct order.

Time and Space Complexity

    Time Complexity: O(Nlog⁡N)O(N \log N)O(NlogN), due to sorting.
    Space Complexity: O(N)O(N)O(N), for storing the graph and the itinerary.
*/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {};
    
    for (const [src, dst] of tickets) {
        if (!graph[src]) graph[src] = [];
        graph[src].push(dst);
    }
    
    for (const key in graph) {
        graph[key].sort((a, b) => b.localeCompare(a));
    }
    
    const stack = ['JFK'];
    const itinerary = [];
    
    while (stack.length > 0) {
        while (graph[stack[stack.length - 1]] && graph[stack[stack.length - 1]].length > 0) {
            stack.push(graph[stack[stack.length - 1]].pop());
        }
        itinerary.push(stack.pop());
    }
    
    return itinerary.reverse();
};
/*
Code Highlights and Best Practices

    The Recursive DFS is elegant but uses the system stack, making it susceptible to stack overflow for very large graphs.
    The Iterative DFS is more flexible as it explicitly uses a stack, allowing for better control over the traversal process.
*/
