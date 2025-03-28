//www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7

/**
 *
 *
 * - Create a set sptSet (shortest path tree set) that keeps track of vertices included in the shortest path tree,
 *   i.e., whose minimum distance from the source is calculated and finalized. Initially, this set is empty.
 * - Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE.
 *   Assign the distance value as 0 for the source vertex so that it is picked first.
 * -  While  sptSet  doesn’t include all vertices
 *  - Pick a vertex  u  that is not there in  sptSet  and has a minimum distance value.
 *  - Include u to  sptSet.
 *  - Then update the distance value of all adjacent vertices of  u.
 *     Iterate through all adjacent and for  every adjacent  v,
 *     if the sum of the distance value of  u  (from source) and weight of edge  u-v,
 *     is less than the distance value of  v,
 *     then update the distance value of  v.
 *
 *
 */

function minDistance({ sptSet, dist }) {
  let minDistance = Number.MAX_VALUE;
  let nextClosest = -1;
  for (let i = 0; i < sptSet.length; i++) {
    if (sptSet[i] === false && dist[i] <= minDistance) {
      minDistance = dist[i];
      nextClosest = i;
    }
  }
  return nextClosest;
}

export function dijkstras({ graph, src }) {
  // (shortest path tree set) keeps track of vertices included in the shortest path tree
  let sptSet = new Array(graph.length);
  // a distance value for each vertex in the graph
  let dist = new Array(graph.length);

  for (let i = 0; i < sptSet.length; i++) {
    sptSet[i] = false;
    // Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE.
    dist[i] = Number.MAX_VALUE;
  }

  // Assign the distance value as 0 for the source vertex so that it is picked first.
  dist[src] = 0;

  //   * -  While  sptSet  doesn’t include all vertices
  while (sptSet.includes(false)) {
    const nextClosest = minDistance({ sptSet, dist });
    sptSet[nextClosest] = "x";
    dist[nextClosest] = 10;
  }
  //   *  - Pick a vertex  u  that is not there in  sptSet  and has a minimum distance value.
  //   *  - Include u to  sptSet.
}
