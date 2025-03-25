import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, MessageSquare, CheckCircle, Calendar, Clock, Users, Video, Rocket, CreditCard, DollarSign, LayoutList } from "lucide-react"
import Link from "next/link"
import Btn03 from "../components/btn-03"
import Salesiq from "@/components/salesiq"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
       {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#">
          <span className="text-xl font-bold text-green-700">Soft Mania</span>
          </a>
          <a href="#contact">
            <Btn03/>
          </a>
        </div>
      </header>


      <main className="flex-1">    
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#E8F5E9] to-white py-20 md:py-48 py-40">
          <div className="container relative z-10 flex flex-col items-center text-center">

            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <Rocket className="h-4 w-4 text-green-700 mr-2" />
              <span className="text-md font-medium text-yellow-700">Batch starts from April 7</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-10 mb-14">
              Splunk Admin + Development
              <span className="block text-green-700">(Fast Track) - 3 Months</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://chat.whatsapp.com/I5MJEOAfg8z4gquQnHRHUj" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Join WhatsApp Group
                </Button>
              </a>
              <a href="https://drive.softmania.in/external/7b4bfcac344af772b67c4fc443c8d80fc1f78186037091f84874288b6afec737" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-800 hover:bg-green-50 hover:border-green-600">
                  <Download className="mr-2 h-5 w-5" />
                  Download Detailed Syllabus
                </Button>
              </a>
            </div>

          </div>
        </section>

        {/* Course Details */}
        <section id="course-details" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Course Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center flex flex-col items-center">
            <Clock className="h-10 w-10 text-green-700 mb-4" />
            <h3 className="font-bold mb-2">45 Hours</h3>
            <p className="text-sm text-gray-500">Total Training</p>
          </Card>
          <Card className="p-6 text-center flex flex-col items-center">
            <Calendar className="h-10 w-10 text-green-700 mb-4" />
            <h3 className="font-bold mb-2">3 Months</h3>
            <p className="text-sm text-gray-500">Course Duration</p>
          </Card>
          <Card className="p-6 text-center flex flex-col items-center">
            <Users className="h-10 w-10 text-green-700 mb-4" />
            <h3 className="font-bold mb-2">5 Members</h3>
            <p className="text-sm text-gray-500">Per Batch</p>
          </Card>
          <Card className="p-6 text-center flex flex-col items-center">
            <Video className="h-10 w-10 text-green-700 mb-4" />
            <h3 className="font-bold mb-2">Online</h3>
            <p className="text-sm text-gray-500">Live Sessions</p>
          </Card>
          <Card className="p-6 text-center flex flex-col items-center">
            <LayoutList className="h-10 w-10 text-green-700 mb-4" />
            <h3 className="font-bold mb-2">1 Hour</h3>
            <p className="text-sm text-gray-500">Every Alternate Day</p>
          </Card>
          <Card className="p-6 text-center flex flex-col items-center">
            <Clock className="h-10 w-10 text-green-700 mb-4" />
            <h3 className="font-bold mb-2">Batch Timings</h3>
            <p className="text-sm text-gray-500">8:30-9:30 AM <br></br> 1:00-2:00 PM <br></br> 8:30-9:30 PM IST</p>
          </Card>
          <Card className="p-6 text-center flex flex-col items-center">
            <DollarSign className="h-10 w-10 text-green-700 mb-4" />
            <h3 className="font-bold mb-2">Rs. 45,000/-</h3>
            <p className="text-sm text-gray-500">Per Person</p>
          </Card>
        </div>
      </div>
    </section>

        {/* Detailed Syllabus */}
        <section id="syllabus" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Syllabus</h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="admin" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="admin">Splunk Admin</TabsTrigger>
                  <TabsTrigger value="developer">Splunk Developer</TabsTrigger>
                </TabsList>
                <TabsContent value="admin" className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Splunk Admin (20 Hours)</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="requirement-gathering">
                      <AccordionTrigger>Requirement gathering</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li>Identify data sources, log formats, and ingestion methods.</li>
                          <li>Define access controls, retention policies, and compliance needs.</li>
                          <li>Gather performance, scaling, and monitoring requirements.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="capacity-planning">
                      <AccordionTrigger>Capacity Planning</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li>Estimate data ingestion volume and indexing needs.</li>
                          <li>Plan hardware resources (CPU, RAM, storage) based on workload.</li>
                          <li>Consider license limits and future scalability.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="architecture-planning">
                      <AccordionTrigger>Architecture Planning</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li>Design Splunk deployment (Standalone vs. Clustered).</li>
                          <li>Plan search head, indexer, and forwarder distribution.</li>
                          <li>Ensure high availability, load balancing, and fault tolerance.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="setup-a-plunk-clustered-environment">
                      <AccordionTrigger>Setup a Splunk Clustered environment</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600 text-left">
                          <li>How to create an AWS EC2 Linux instance & install Splunk</li>
                          <li>Indexer Cluster - 3 Indexers, 1 Cluster Manager</li>
                          <li>Search Head Cluster - 3 Search Heads, 1 Deployer</li>
                          <li>1 Monitoring Console, 1 License Manager</li>
                          <li>1 Intermediate Forwarder</li>
                          <li>1 UF - To collect Linux server logs</li>
                          <li>1 UF - To collect Windows server logs</li>
                          <li>Troubleshoot Common cluster issues</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="deploy-apps-to-clustered-environment">
                      <AccordionTrigger>Deploy Apps to Clustered environment</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li>How to Split the Apps/Add-ons to Deploy on Distributed environment?</li>
                          <li>How to Deploy Apps to Search Head Cluster?</li>
                          <li>How to Deploy Apps to Indexer Cluster?</li>
                          <li>How to Deploy Apps to Forwarders using Deployment Server?</li>
                          <li>How to create an Index in an Indexer Cluster?</li>
                          <li>How to clean data from Splunk Index?</li>
                          <li>How to delete an Index from Indexer Cluster?</li>
                          <li>Troubleshoot Common App Deployment Issues</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="onboard-the-data-to-splunk-clustered-environment">
                      <AccordionTrigger>Onboard the data to Splunk Clustered environment</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li>How to Onboard data from Windows Active Directory</li>
                          <li>How to Onboard data from Windows DNS</li>
                          <li>How to Onboard data from Open VPN</li>
                          <li>How to Onboard data from Syslog</li>
                          <li>How to Onboard data from Intrusion Detection - OSSEC</li>
                          <li>Different methods in Data Onboarding</li>
                          <li>Different use-cases in Data Forwarding</li>
                          <li>Parsing - Data Quality check</li>
                          <li>How Splunk Stores the data?</li>
                          <li>How do you estimate/find/calculate License usage?- Standalone</li>
                          <li>What are all the types of Licenses available?</li>
                          <li>The difference between a Universal Forwarder and a Heavy Forwarder</li>
                          <li>How to select a Forwarder?</li>
                          <li>Troubleshoot Common Data Onboarding / Parsing issues</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="developer" className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Splunk Developer (20 Hours)</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="field-extraction-from-data">
                      <AccordionTrigger>Field Extraction from data</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li>Regular Expression basics</li>
                          <li>How to extract Field from Unstructured data?</li>
                          <li>How to create calculated fields?</li>
                          <li>How to add lookup information into the raw data?</li>
                          <li>Why sourcetype matters in Splunk?</li>
                          <li>Where to deploy the particular property of configuration files?</li>
                          <li>How to create eventtypes & tags?</li>
                          <li>Troubleshoot Common Field extraction issues</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="CIM-mapping">
                      <AccordionTrigger>CIM Mapping</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li>What is Common Information Model (CIM)?</li>
                          <li>How CIM is being used?</li>
                          <li>How to use Data Model in Splunk?</li>
                          <li>How to Write queries for common scenarios?</li>
                          <li>Troubleshoot common CIM Mapping issues</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="dashboard-development">
                      <AccordionTrigger>Dashboard development</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li>How to create Different visualizations in Splunk?</li>
                          <li>How to add Different Inputs to Splunk Dashboards?</li>
                          <li>How to provide access for a specific dashboard to specific user?</li>
                          <li>How do you create dependent dropdowns?</li>
                          <li>How do you create a drill-down for panels?</li>
                          <li>How do you handle tokens inside the dashboard?</li>
                          <li>Troubleshoot Common Dashboard issues</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Reports-Alerts-creation">
                      <AccordionTrigger>Reports & Alerts creation</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li><b>How to create a Report?</b> <br></br>
                            - Schedule a Report for a Particular Time <br></br>
                            - Schedule a Report That Sends a PDF to Multiple Email IDs Based on Data <br></br>
                            - Schedule a Report to Improve Dashboard Performance <br></br>
                            - Generate Scheduled Reports with Conditional Data Splitting <br></br>
                            - Export Scheduled Reports in Multiple Formats <br></br>
                            - Use Lookup Files in Scheduled Reports <br></br>


                          </li>
                          <li><b>How to create an Alert?</b> <br></br>
                            - Trigger an Alert When a Report Detects Anomalies <br></br>
                            - Throttle Alerts to Avoid Spam Notifications <br></br>
                            - Create Alerts Based on Dynamic Thresholds (Trend-Based Alerting) <br></br>
                            - Trigger Multi-Action Alerts (Email, Script Execution, Ticketing, etc.) <br></br>
                            - Trigger Alerts Based on Lookup Data <br></br>
                            - Trigger Alerts Using REST API/Webhooks <br></br>
                            - Use Per-Result vs. Aggregated Alerts <br></br>
                            - Suppress Alerts During Maintenance Windows <br></br>

                          </li>

                          <li>Troubleshoot common Reporting & Alerting Issues</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>

            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Who is This Course For?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="managers">
                  <AccordionTrigger className="text-lg font-medium">Managers</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      <li>I am a Manager , I want to learn Splunk on a High level to manage my team.</li>
                      <li>I am a Manager, I want to be good in Splunk Arechitecture implementation.</li>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="soc-analysts">
                  <AccordionTrigger className="text-lg font-medium">SOC Analysts</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      <li>I am a SOC Analyst, I got assigned to Splunk Project, I don’t know where to get started.</li>
                      <li>I got a project in splunk, but I don't have any Idea about it, how it works and all the functionality, I need to learn splunk.</li>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="soc-sec-analysts">
                  <AccordionTrigger className="text-lg font-medium">SOC / Security Analyst</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      <li>I am a SOC / Security Analyst, I know how to use Splunk Enterprise Security & create Dashboard - I want to learn how to setup Splunk & Onboard the data.</li>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="admins-developers">
                  <AccordionTrigger className="text-lg font-medium">Splunk Admins & Developers</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      <li>I am a certified Splunk Enterprise Admin, but I don’t have real-time experience -  I want to learn real-time project implementation.</li>
                      <li>I know how to setup Splunk Search head, Indexer, Forwarder & other components, but I want to learn how to implement it in a live project.</li>
                      <li>I have learned all the concepts in Splunk Admin, but I haven’t done any real time project implementation.</li>
                      <li>I want to learn Splunk environment setup, Data Onboarding, Dashboard development, Reporting & Alerting.</li>
                      <li>I am already working as a Splunk Developer, I want to learn Advanced Splunk Admin concepts</li>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="job-seekers">
                  <AccordionTrigger className="text-lg font-medium">Job Seekers</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      <li>I want to learn Splunk Admin Advanced topics & get the job, as soon as possible.</li>
                      <li>I cleared Splunk Admin Interview & got the Job, but i don’t have a real-time knowledge.</li>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="advanced-users">
                  <AccordionTrigger className="text-lg font-medium">Advanced Users</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Expand your Splunk Admin & Security capabilities with advanced topics like clustering, distributed
                      search, and security compliance implementation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact & Enrollment */}
        <section id="contact" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Enrollment Process</h2>
            <div className="gap-4 max-w-2xl mx-auto">

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Complete Registration</h4>
                    <p className="text-gray-600 text-sm">
                      Fill out the enrollment form and select your preferred batch timing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Make Payment</h4>
                    <p className="text-gray-600 text-sm">
                      Secure payment options available including UPI, credit card, and bank transfer
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Start onboarding...</h4>
                    <p className="text-gray-600 text-sm">
                      Connect with instructors and get your initial questions answered
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-8 p-6 bg-green-100 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold mb-4 text-green-700">Ready to Enroll?</h4>
                <p className="text-gray-600 mb-6">
                  Join our WhatsApp group for quick enrollment and get answers to all your questions from our expert
                  instructors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://chat.whatsapp.com/I5MJEOAfg8z4gquQnHRHUj" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-600 hover:bg-green-800 rounded-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp Group
                    </Button>
                  </a>
                  <a href="https://www.softmania.in/splunk-training/index" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-700 hover:bg-green-800 rounded-full">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payment Link
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="right-one-for-me">
                  <AccordionTrigger>I feel this course may not be the right one for me, what do you say?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Well... It could be. For sure, this course is not for everyone. <br></br>
                      This course is only suitable for Splunk beginners who never worked on an end-to-end Splunk Project implementation.
                      <br></br>
                      <br></br>

                      <li>If you already have a real-time experience in working live environment, from scratch, then this course will not be the right one for you.</li>
                      <li>If you already gone through any course/training that helped you to implement end-to-end project with Live data source, and you learned it well, then this course is not suitable for you.</li>
                      <li>If you already learned all topics in Splunk & practiced it in your lab environment and feel confident, then this course might not be suitable for you.</li>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="batch">
                  <AccordionTrigger>When is the batch starting?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      It starts from April 7
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="next-batch">
                  <AccordionTrigger>I am planning to join in the future, when is the next batches starts?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      The next batches will be starting from June 9
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="I-miss">
                  <AccordionTrigger>What if I miss the session?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      We would strongly recommend joining each session, as it is activity based. The real learning you will get only if you do that activity regularly. Yeah missing one or two sessions happens, you will have access to recorded session - which you can watch and learn before the next session.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="morning-batch">
                  <AccordionTrigger>If I miss the morning batch session, can I join the Afternoon batch session for that day?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      No, each batch has it's own attendees, with their own activities.. So joining other batch on a particular day is not allowed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="going-to-learn">
                  <AccordionTrigger>What am I going to learn in this training?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      You are going to learn how to implement an end-to-end Splunk Project from the scratch, with Live security data sources. This 3 months long activity will show you how a real-time projects are being setup & what are all the troubleshooting you will have to do while setting up the Splunk infrastructure?
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="trainings-available-market">
                  <AccordionTrigger>What is the difference between this training & other trainings available in the market?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      We believe each training has it's own purpose. In the market there are a lot of trainings that explains all Splunk concepts in detail, with sample data for each case. This training focuses more on the Implementation part of the concepts you might have learned in other courses/in your self-learning journey. This course starts from
                      <li>Requirement Gathering</li>
                      <li>Capacity Planning</li>
                      <li>Architecture Planning</li>
                      <li>Setup the Infrastructure</li>
                      <li>Data Onboarding</li>
                      <li>Field Extraction</li>
                      <li>Dashboard Development</li>
                      <li>Reports & Alerts</li>
                      All these topics will be covered within 45 hours, the aim of this course is to provide end to end real time experience (each area essentials will be covered)..
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="recorded-videos">
                  <AccordionTrigger>Will I get the recorded videos of the sessions?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes, If you have registered for any of the batch, you will have access to the recorded sessions till 1 year.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pre-requisites">
                  <AccordionTrigger>Is there any pre-requisites before taking the course?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes, you should have some basic understanding of the IT terminologies like Server, Instance, Network, Data, Log file, CPU, Memory, Deployment, Software, Application, etc.. Apart from these.. you just need to have some curiosity to get real time knowledge.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="EMI-options">
                  <AccordionTrigger>Is there any EMI options for this fee?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes, you can choose credit/debit card EMI for minimum of 3 months to 24 months.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="data-sources">
                  <AccordionTrigger>What are the data sources that will be used in this course? are they Live</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes, they are Live data sources, not sample data.
                      <li>Files & Directories</li>
                      <li>Scripted Input</li>
                      <li>Windows Data (AD/DNS)</li>
                      <li>OSSEC</li>
                      <li>HTTP Event Collector (Jenkins)</li>
                      <li>AWS</li>
                      <li>Syslog (TCP/UDP)</li>
                      <li>MSSQL</li>
                      <li>FortiGate Firewall</li>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lab-environment">
                  <AccordionTrigger>Am I going to have a Lab environment to practice during this course?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes. The complete training itself creating the environment from the scratch to end. So you will be creating the infrastructure setup by yourself step by step, with the detailed instructions provided by us.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="course-help-me">
                  <AccordionTrigger>I am new to Splunk Admin, I know only Splunk development, will this course help me?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes. If you are looking for an exposure to the end-to-end project setup as an Admin, then this course will be the right fit for you. <br></br>
                      <br></br>
                      If you are just looking for some course that gives all topics explanation, this is not the right course for you. (To be frank, there are a lot of resources available on the internet, at a very low cost, even for free - those can help you to get the explanation) - This course focuses on project implementation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="struggling-crack-interview">
                  <AccordionTrigger>I am struggling with real-time concepts, will this course help me to crack the interview?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      This course mainly focuses on scenario based use cases that you might face on a day-to-day activities related to Splunk end-to-end project implementation. There are a lot of activities you will be asked to do by yourself with our guidance, by doing these activities you will gain the experience which can help you to answer the interview questions in a practical way. But yeah nobody can assure 100% that you will clear the interview, it is totally depends on how you are answering in it, but for sure this course will give you a confidence related to Splunk Project side.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="discounts">
                  <AccordionTrigger>Is there any last minute discounts you will be providing?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      There are no discounts. it is fixed price.
                      We understand you might be just starting the learning and unable to spend this. If you are a beginner and just want to get started, there are a lot of resources that can help you to learn for free or with lower cost. Please find those details below
                      <br></br> <br></br>
                      <li>Splunk Learning Resources at Low (or) Free of Cost - Part-1: https://drive.google.com/file/d/1bQ_IHnR0L9u_0yT1zzA_m9wqqS9mq96T/view</li>
                      <li>Splunk Learning Resources at Low (or) Free of Cost - Part-2:
                        https://drive.google.com/file/d/1ap6MneNfP7oLGZGsgDE_mwdG-2R8jdan/view
                      </li>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="registration-closing">
                  <AccordionTrigger>When is the registration closing?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      The batches are having only 5 seats per batch as they are including project based activities.. <b>as soon as they are filled</b> ... the registrations will be closed.. Next batches will be starting from June 09..
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="https://splunk.softmania.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <h3 className="text-white font-bold text-lg mb-4">SoftMania</h3>
              </Link>
              <p className="text-sm">Professional Splunk training with real-world projects and hands-on experience.</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#course-details" className="hover:text-white transition-colors">
                    Course Details
                  </Link>
                </li>
                <li>
                  <Link href="#syllabus" className="hover:text-white transition-colors">
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="hover:text-white transition-colors">
                    Learning Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="mailto:info@softmania.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Email: info@softmania.in
                  </Link>
                </li>
                <li>
                  <Link href="tel:+91 9750962781" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Phone: +91 9750962781
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/9750962781" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp: +91 9750962781
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/company/softmania-tech" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/@SoftManiaTech" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/softmaniatech" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M7.5 2C4.42 2 2 4.42 2 7.5v9C2 19.58 4.42 22 7.5 22h9c3.08 0 5.5-2.42 5.5-5.5v-9C22 4.42 19.58 2 16.5 2h-9ZM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5Zm0 1.5A3.5 3.5 0 0 0 8.5 12 3.5 3.5 0 0 0 12 15.5 3.5 3.5 0 0 0 15.5 12 3.5 3.5 0 0 0 12 8.5ZM17.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} softmania. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="https://splunk.softmania.in/#/privacy-policy" target="_blank" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="https://splunk.softmania.in/#/terms-and-conditions" target="_blank" className="hover:text-white transition-colors">
                Terms & conditions
              </Link>
              <Link href="https://splunk.softmania.in/#/refund-policy" target="_blank" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div>

      <Salesiq />
    </div>
    </div>


    
  )

}

