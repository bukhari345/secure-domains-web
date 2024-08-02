import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins/400.css'; // Weight 400
import '@fontsource/poppins/700.css'; // Weight 700

const DnsDescription = () => {
    return (
        <>
            <div className="container mt-5 text-white" style={{ fontFamily: 'Poppins' }}>
                <h2 className="fw-bold fs-2 fs-md-3">What is DNS?</h2>
                <p>
                    <span className="text-primary fw-bold text-decoration-underline">DNS (Domain Name System)</span> is a critical network service that translates user-friendly domain names into numerical IP addresses, enabling internet accessibility. However, its pivotal role also makes it a prime target for cyber threats. Hackers exploit DNS vulnerabilities for various attacks, including malware distribution and phishing campaigns.
                </p>
                <p>
                    In response, <span className="fw-bold">DNS Armor</span>™ provides a Cloud DNS Firewall solution. It offers centralized visibility and precise control over security policies, leveraging advanced filtering capabilities and dynamic threat intelligence feeds to detect and mitigate a wide range of threats, from malware to data exfiltration, thus safeguarding networks in an increasingly interconnected digital landscape.
                </p>
            </div>
            <div className="container mt-5 text-white" style={{ fontFamily: 'Poppins' }}>
                <h2 className="fw-bold fs-2 fs-md-3">The need for DNS security</h2>
                <p className="text-start">
                    <span className="text-info">DNS security</span> is crucial in today's cybersecurity landscape, given its pivotal role in facilitating cyber attacks. With <span className="text-info">92% of malware</span> exploiting DNS for Command and Control communication, it's evident that malicious actors heavily rely on this protocol.<span className="text-info"> Furthermore, malware and phishing</span> collectively account for 91% of cyber threats, underscoring the importance of DNS as the primary defense mechanism. This emphasizes the need for robust DNS security measures to safeguard networks and mitigate the risk of infiltration and data breaches.
                </p>
                <p>
                    Amidst <span className="text-info">digital transformation</span> and the adoption of technologies like SDWAN and WFH, the <span className="text-info">exposure to security risks</span> has significantly increased. The global market size for DNS Firewall reached <span className="text-info">$1.3 billion</span> in 2022, indicating the growing recognition of DNS security's importance. Traditional security solutions often fall short in detecting DNS-based attacks, highlighting the necessity for specialized solutions such as DNS Armor ™. These solutions provide proactive threat detection and blocking at the DNS level, enhancing overall cyber resilience.
                </p>
                <p>
                    In the face of <span className="text-info">ransomware and phishing</span> attacks, DNS security plays a critical role in mitigating risks and protecting sensitive data. Ransomware exploits DNS for key exchange and malicious downloads, while phishing attacks rely on DNS redirection to compromise users. <span className="text-info">By leveraging threat intelligence feeds,</span> DNS Armor ™ automatically blocks access to malicious domains, reducing the likelihood of successful attacks. In the evolving cybersecurity landscape, DNS Firewalls and visibility tools serve as frontline defenses, bolstering Security Operations Centers' efforts to safeguard networks and combat emerging threats effectively.
                </p>
            </div>
        </>
    );
};

export default DnsDescription;
