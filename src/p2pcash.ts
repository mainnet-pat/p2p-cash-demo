import { PeerOptions } from "p2p-cash";
import { Peer, Cluster } from "p2p-cash";

const peer1: PeerOptions = {
  ticker: "BCH",
  node: `35.209.186.110`, // 26.0 protocol 70016
  port: 8333,
  wsProxyNode: `wsproxy.pat.mn`,
  useSSL: true,
  wsProxyPort: 443,
  DEBUG_LOG: true,
  listenRelay: true,
};

const peer2 = {...peer1, node: "3.142.98.179"}; // 24.0 protocol 70015
const peer3 = {...peer1, node: "206.124.149.67"}; // 24.1 protocol 70016
const peer4 = {...peer1, node: "194.156.188.60"}; // 24.1 protocol 70016

export class P2PCash {
  static peer: Peer;
  static cluster: Cluster;

  static getPeer() {
    if (!this.peer) {
      this.peer = new Peer(peer1);
      this.peer.connect();
    }

    return this.peer;
  }

  static getCluster(): Cluster {
    if (!this.cluster) {
      this.cluster = new Cluster({confidence: 3});
      this.cluster.addServer(peer1);
      this.cluster.addServer(peer2);
      this.cluster.addServer(peer3);
      this.cluster.addServer(peer4);
    }

    return this.cluster;
  }
}
