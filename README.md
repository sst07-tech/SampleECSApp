# SampleECSApp

AWS Fargate - Running Dockerized Apps -
https://www.youtube.com/watch?v=aa3gGwJpCro

Steps to build ECS microservice with Load-balancer —>

Now go to ECS and click Clusters —>
 Amazon ECS - Amazon ECS makes it easy to deploy, manage, and scale Docker containers running applications, services, and batch processes. Amazon ECS places containers across your cluster based on your resource needs and is integrated with familiar features like Elastic Load Balancing, EC2 security groups, EBS volumes and IAM roles.

Clusters - An Amazon ECS cluster is a regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service. Clusters may contain more than one Amazon EC2 instance type.

<img width="1641" alt="Screen Shot 2022-06-11 at 5 10 15 PM" src="https://user-images.githubusercontent.com/54218816/174008454-8248daa5-8066-4243-9fae-a81176a6abc2.png">


<img width="1641" alt="Screen Shot 2022-06-11 at 5 13 03 PM" src="https://user-images.githubusercontent.com/54218816/174008600-d5f4b0e7-e6fc-4447-9211-3142eca48762.png">

<img width="1641" alt="Screen Shot 2022-06-11 at 5 14 56 PM" src="https://user-images.githubusercontent.com/54218816/174008618-ba1ed5ba-4802-4758-96dc-4eb9ff2d83c8.png">

<img width="1641" alt="Screen Shot 2022-06-11 at 5 15 43 PM" src="https://user-images.githubusercontent.com/54218816/174008645-c07d5d75-cf22-48be-9489-f63cd3db7698.png">

<img width="1641" alt="Screen Shot 2022-06-11 at 5 16 13 PM" src="https://user-images.githubusercontent.com/54218816/174008654-78fb0677-b2cd-4355-af34-cee95e44ca8b.png">

Task is like a template and we put the container image inside the task.

Now go to Task Definitions and click create -
Task definitions specify the container information for your application, such as how many containers are part of your task, what resources they will use, how they are linked together, and which host ports they will use.

<img width="1641" alt="Screen Shot 2022-06-11 at 5 18 36 PM" src="https://user-images.githubusercontent.com/54218816/174008699-316175a4-e16c-4638-b8d3-e0cf2774b9ad.png">

<img width="1641" alt="Screen Shot 2022-06-11 at 5 20 30 PM" src="https://user-images.githubusercontent.com/54218816/174008711-4d63d60b-3673-4759-affd-792cd84610be.png">


<img width="1641" alt="Screen Shot 2022-06-11 at 5 24 08 PM" src="https://user-images.githubusercontent.com/54218816/174008724-dfd40092-ae63-479c-bb16-52523de3f3b6.png">


Also defined Task Role so that ECS Micro-service can access specified S3 Bucket.

<img width="1641" alt="Screen Shot 2022-06-11 at 5 26 59 PM" src="https://user-images.githubusercontent.com/54218816/174008784-2c124100-d531-4af8-a57e-da5884530860.png">



Now Click on Add container -

Put details as shown in the image below. Under Port mapping put the port which is exposed in your app.

<img width="1080" alt="Advanced container configuration" src="https://user-images.githubusercontent.com/54218816/174008831-a27487da-262a-4791-9ca3-ede6d187cf73.png">

Click Add at the Bottom to add container.

<img width="961" alt="Screen Shot 2022-06-11 at 5 37 33 PM" src="https://user-images.githubusercontent.com/54218816/174008914-6f1c865a-e6bb-4ecf-b678-efa9d5525aad.png">


Post this just click create at the bottom.

<img width="961" alt="Log router integration" src="https://user-images.githubusercontent.com/54218816/174008972-bdf7ec73-5ee1-4d86-8353-68155e302e4b.png">

<img width="1658" alt="Screen Shot 2022-06-11 at 5 40 01 PM" src="https://user-images.githubusercontent.com/54218816/174008985-d69b8bb1-58e1-4106-b785-e3a607629182.png">


<img width="1080" alt="Advanced container configuration" src="https://user-images.githubusercontent.com/54218816/174008831-a27487da-262a-4791-9ca3-ede6d187cf73.png">

Go Back to Clusters -

<img width="1658" alt="Screen Shot 2022-06-11 at 5 51 47 PM" src="https://user-images.githubusercontent.com/54218816/174009123-f4fbdff0-2d5e-4eec-b3bc-3f222e0e9af1.png">

<img width="1658" alt="Screen Shot 2022-06-11 at 5 55 00 PM" src="https://user-images.githubusercontent.com/54218816/174009159-e473cf02-061f-4176-963f-838b80232934.png">

Now if we create Services we have to specify Load balancer details. So before creating services we should create LB.

Go to EC2 —> Load Balancer —> Create LB

Click on ALB and Create -

<img width="1089" alt="Select load balancer type" src="https://user-images.githubusercontent.com/54218816/174009224-b22e3131-d4fc-4cbc-b38c-46220257faa0.png">

<img width="1162" alt="Screen Shot 2022-06-11 at 6 14 01 PM" src="https://user-images.githubusercontent.com/54218816/174009264-348933db-55cd-45b1-ae66-215596df6eff.png">

<img width="1162" alt="Screen Shot 2022-06-11 at 6 15 27 PM" src="https://user-images.githubusercontent.com/54218816/174009313-955f7568-ea2f-4538-b219-682963ddd20f.png">

Now while selecting Security Groups we can select default one or can create a new SG.

<img width="1642" alt="Screen Shot 2022-06-11 at 6 23 34 PM" src="https://user-images.githubusercontent.com/54218816/174009361-7bab653b-4e75-4f96-997f-a995ae655f90.png">

<img width="1134" alt="Screen Shot 2022-06-11 at 6 26 07 PM" src="https://user-images.githubusercontent.com/54218816/174009391-d3d37385-dced-40d2-b63f-5dc7153654d9.png">

Coming to Listeners and routing - We have to create Target Group -

<img width="1134" alt="Screen Shot 2022-06-11 at 6 28 02 PM" src="https://user-images.githubusercontent.com/54218816/174009465-164d64bf-fb27-4c12-8d06-47a007754688.png">

Click on “Create target group” -  And select IP Addresses

<img width="1192" alt="Specify group details" src="https://user-images.githubusercontent.com/54218816/174009534-9414995f-ed08-4b86-8949-53a458a67477.png">

Specify the port as exposed in node-web-app. In my case it is 3000 PORT.

<img width="951" alt="Screen Shot 2022-06-11 at 6 31 52 PM" src="https://user-images.githubusercontent.com/54218816/174009635-599d66a2-2a83-4999-ab45-1ed54b3a0a22.png">

Click Next

And Click Create Target Groups for now.

<img width="1650" alt="Screen Shot 2022-06-11 at 7 46 56 PM" src="https://user-images.githubusercontent.com/54218816/174009675-e69d5089-f990-43fc-b5f0-ba9e0ea3575c.png">

<img width="1650" alt="Screen Shot 2022-06-11 at 9 22 41 PM" src="https://user-images.githubusercontent.com/54218816/174009703-674a3453-88a0-4e01-a5e5-af727942dc0a.png">


Click Create LB.

<img width="1650" alt="Create Application Load Balancer" src="https://user-images.githubusercontent.com/54218816/174009741-8f0ee4c8-36dc-4b23-bf18-3119188735b2.png">

Now come back to DemoAppCluster in ECS and click on Services Tab.

Click Create

<img width="1650" alt="Screen Shot 2022-06-11 at 9 59 48 PM" src="https://user-images.githubusercontent.com/54218816/174009830-9222e5bc-9be8-47c5-b533-0ea6eb9b9624.png">

Number Of Tasks - Minimum number of Fargate instances you need.

<img width="1650" alt="Screen Shot 2022-06-11 at 10 02 09 PM" src="https://user-images.githubusercontent.com/54218816/174009874-82bc8629-15d3-4555-b5cc-8558b087f49e.png">

<img width="1650" alt="Screen Shot 2022-06-11 at 10 04 48 PM" src="https://user-images.githubusercontent.com/54218816/174009936-2410b89b-02ff-49cd-a024-163e76a0afc4.png">


<img width="1650" alt="Screen Shot 2022-06-11 at 10 06 50 PM" src="https://user-images.githubusercontent.com/54218816/174009965-53190086-4cb1-4070-bd8e-e3a47273cebc.png">


Select the Load balancer name as DemoAppLB.
Container to load balance. —> Click Add to Load Balancer

<img width="1189" alt="Screen Shot 2022-06-11 at 10 36 00 PM" src="https://user-images.githubusercontent.com/54218816/174010039-09745764-9078-41a7-acf9-89813f372412.png">


<img width="1398" alt="Screen Shot 2022-06-11 at 10 38 03 PM" src="https://user-images.githubusercontent.com/54218816/174010067-af3ef8ff-b80f-4c71-aca6-0dfffd192c97.png">


Click Next Step and the Click Create Service.

<img width="1673" alt="Screen Shot 2022-06-11 at 10 39 37 PM" src="https://user-images.githubusercontent.com/54218816/174010103-eca13aa1-b3ac-4b31-bf11-5e7688d4a13e.png">

<img width="1673" alt="Screen Shot 2022-06-11 at 10 40 40 PM" src="https://user-images.githubusercontent.com/54218816/174010156-f9077e26-83c4-4bd5-8ad8-51c7a9b6da43.png">

Currently the request to LB from Internet to Fargate will fail as it requires additional steps.
	
Testing the above line —> go to LB —> Select DemoAppLB —> Copy the DNS Name —> DemoAppLB-758468688.us-east-1.elb.amazonaws.com

<img width="1673" alt="Screen Shot 2022-06-11 at 10 46 05 PM" src="https://user-images.githubusercontent.com/54218816/174010233-e97262ad-31a9-425f-b244-dab26834b64f.png">

On hitting DNS name in browser getting -

<img width="1673" alt="Screen Shot 2022-06-11 at 10 46 36 PM" src="https://user-images.githubusercontent.com/54218816/174010274-580911c5-4364-4e94-a61c-8e816b9b10fa.png">

Need to provide LB SecurityGroup access to Fargate Application SecurityGroup.

Open Security Group for Fargate —>

<img width="1673" alt="Screen Shot 2022-06-11 at 10 52 34 PM" src="https://user-images.githubusercontent.com/54218816/174010347-7959aad0-afad-44b9-bffb-69e49b24a611.png">

Go to inbound rules —> And allow LB SG to send request to Fargate

<img width="1673" alt="Screen Shot 2022-06-11 at 10 59 04 PM" src="https://user-images.githubusercontent.com/54218816/174010408-8274d988-0724-40a3-8cd4-c195a559af90.png">





