---
title: "Anonymous and Confidential File Sharing over Untrusted Clouds"
authors: Stefan&nbsp;Contiu, Sébastien&nbsp;Vaucher, Rafael&nbsp;Pires, Marcelo&nbsp;Pasin, Pascal&nbsp;Felber, Laurent&nbsp;Réveillère
conference_short: SRDS 2019
conference_long: 38th IEEE International Symposium on Reliable Distributed Systems, Lyon, France, 2019
conference_website: https://srds2019.projet.liris.cnrs.fr/
date: 2019-10-01
arxiv: 1907.06466
source: https://github.com/rafaelppires/anonym-sharing
doi: 10.1109/SRDS47363.2019.00013
---
Using public cloud services for storing and sharing confidential data requires end users to cryptographically protect both the data and the access to the data.
In some cases, the identity of end users needs to remain confidential against the cloud provider and fellow users accessing the data.
As such, the underlying cryptographic access control mechanism needs to ensure the anonymity of both data producers and consumers.

We introduce <span class="small-caps">A-Sky</span>, a cryptographic access control extension capable of providing confidentiality and anonymity guarantees, all while efficiently scaling to large organizations.
<span class="small-caps">A-Sky</span> leverages _trusted execution environments_ (TEEs) to address the impracticality of _anonymous broadcast encryption_ (ANOBE) schemes, achieving faster execution times and shorter ciphertexts.
The innovative design of <span class="small-caps">A-Sky</span> limits the usage of the TEE to the narrow set of data producing operations, and thus optimizes the dominant data consumption actions by not requiring a TEE.
Furthermore, we propose a scalable implementation for <span class="small-caps">A-Sky</span> leveraging micro-services that preserves strong security guarantees while being able to efficiently manage realistic large user bases.
Results highlight that the <span class="small-caps">A-Sky</span> cryptographic scheme is 3 orders of magnitude better than state of the art ANOBE, and an end-to-end system encapsulating <span class="small-caps">A-Sky</span> can elastically scale to support groups of 10&thinsp;000 users while maintaining processing costs below 1 second.
