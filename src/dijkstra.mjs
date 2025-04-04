//www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7

/**
 *
 * TODO:
 *
 * - a function to get the shortest path by vertex
 * - trace through the algorithm steps to get a better feel for how it works
 *
 */

/**
 *
 *
 * - Create a set sptSet (shortest path tree set) that keeps track of vertices included in the shortest path tree,
 *   i.e., whose minimum distance from the source is calculated and finalized. Initially, this set is empty.
 * - Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE.
 *   Assign the distance value as 0 for the source edges_u so that it is picked first.
 * -  While  sptSet  doesn’t include all vertices
 *  - Pick a edges_u  u  that is not there in  sptSet  and has a minimum distance value.
 *  - Include u to  sptSet.
 *  - Then update the distance value of all adjacent vertices of  u.
 *     Iterate through all adjacent and for  every adjacent  v,
 *     if the sum of the distance value of  u  (from source) and weight of edge  u-v,
 *     is less than the distance value of  v,
 *     then update the distance value of  v.
 *
 *
 *  rows represent vertices
 *  values represent edges
 * const graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0], 
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0],
  ];
 */

/**
 *
 * get the index of the lowest value in dist
 * exclude any indicies where spsSet is false
 *
 */
function minDistance({ sptSet, dist }) {
  let minDistance = Number.MAX_VALUE;
  let u = -1;
  for (let i = 0; i < sptSet.length; i++) {
    if (sptSet[i] === false && dist[i] <= minDistance) {
      minDistance = dist[i];
      u = i;
    }
  }
  return u;
}

// const LOG = true;
const LOG = false;

export function dijkstras({ graph, src }) {
  // track the visited vertices
  let sptSet = new Array(graph.length);
  // the distance of each vertex from src
  let dist = new Array(graph.length);

  // initialise values
  for (let i = 0; i < sptSet.length; i++) {
    sptSet[i] = false;
    dist[i] = Number.MAX_VALUE;
  }

  // Assign the distance value as 0 for the source so that it is picked first.
  dist[src] = 0;

  // each vertex has a parent which connects it towards the src
  const parents = [];

  // visit every vertex
  while (sptSet.includes(false)) {
    // Pick the next unvisited vertex which is closest to the src
    const u = minDistance({ sptSet, dist });

    if (LOG) console.log("calculating node: ", u);

    // mark it as visited
    sptSet[u] = true;

    // skip if there is no distance value for this node
    if (dist[u] === Math.MAX_VALUE) {
      continue;
    }

    // Update the distance value of all adjacent vertices
    const edges_u = graph[u];

    for (let v = 0; v < edges_u.length; v++) {
      // the vertex is connected to u, it hasn't been visited
      if (edges_u[v] > 0 && !sptSet[v]) {
        // if the distance from v to src is less than the current distance v to src
        if (dist[u] + edges_u[v] < dist[v]) {
          // update dist v
          dist[v] = dist[u] + edges_u[v];
          // record u as the closest vertex to v
          parents[v] = u;
        }
      }
    }

    if (LOG) console.log("distances", dist);
  }

  return { dist, parents };
}
