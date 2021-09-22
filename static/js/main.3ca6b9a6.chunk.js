(this.webpackJsonpkarinawalker=this.webpackJsonpkarinawalker||[]).push([[0],{41:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),i=(t(41),t(8)),o=t(9),s=t(11),m=t(10),u=t(57),d=t(58),h=t(22),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).activeItem=function(e){n.state.NavItemActive.length>0&&document.getElementById(n.state.NavItemActive).classList.remove("active"),n.setState({NavItemActive:e},(function(){document.getElementById(n.state.NavItemActive).classList.add("active")}))},n.state={NavItemActive:""},n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{id:"navbarstyle"},r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"m-auto"},r.a.createElement(h.LinkContainer,{to:"/about"},r.a.createElement(d.a.Link,{href:"/about",activec:this.activeItem},"About")),r.a.createElement(h.LinkContainer,{to:"/interests"},r.a.createElement(d.a.Link,{href:"/interests",activec:this.activeItem},"Interests")),r.a.createElement(h.LinkContainer,{to:"/education"},r.a.createElement(d.a.Link,{href:"/education",activec:this.activeItem},"Education")))))}}]),t}(n.Component),E=t.p+"static/media/profile_image.97a1fde4.png",f=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"social"},r.a.createElement("a",{className:"btn",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn",href:"https://www.linkedin.com/in/karina-walker-54bb69144/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn",href:"https://github.com/WalkerKarina"},r.a.createElement("i",{className:"fa fa-github"})),r.a.createElement("a",{className:"btn",href:"mailto:karina.walker.nicky@gmail.com"},r.a.createElement("i",{className:"fa fa-envelope-o"})))}}]),t}(n.Component);var w=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement(f,null)))))},v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("h1",null,"Karina Walker"),r.a.createElement("br",null),r.a.createElement("p",null,"Hi, I'm Karina!"),r.a.createElement("p",null,"I am a freshman at ",r.a.createElement("a",{href:"https://www.hmc.edu/"},"Harvey Mudd College")," studying Mathematics and Computer Science. I\u2019m half Japanese, half British, and was born and raised in Singapore.      "),r.a.createElement("p",null,"During my 2020-2021 gap year, I worked at ",r.a.createElement("a",{href:"https://www.coinhako.com/"},"Coinhako")," as a Software Engineer for three months. I was the project lead in automating a user subscription service. I created an API client and categorized subscribers to streamline operations. I also expanded a backend risk evaluation service and created a user-friendly front-end service to accompany it."),r.a.createElement("p",null,"During my gap year, I also dived into the world of machine learning. I took various courses and created my own projects to unearth the mathematical reasoning behind computations."),r.a.createElement("p",null,"I also worked as a mathematics, social studies, and science tutor. I soon realized how time-intensive it is to write student reports for my six students. Subsequently, I have been working on applying some of the deep learning theories I have read about to automate this process.")),r.a.createElement("div",{className:"col-12 col-md-4"},r.a.createElement("img",{src:E,alt:"ProfilePicture",className:"profilePic img-fluid"}))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col col-md-8"},r.a.createElement("h3",null,"Current Project"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Teaching Report")," \u2014 Experimenting with GPT2 for generating student performance comment templates. Implementing GPT2 in browser. ")),r.a.createElement("br",null),r.a.createElement("h3",null,"Past Projects"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://walkerkarina.github.io/doodle/"},"Doodle"))," \u2014 Implementation and creation of CNN model using Doodle's Quick Draw Dataset. Runs in brower using tensorflow.js"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://shop.oogushi-farm2.co.jp/"},r.a.createElement("b",null,"Oogushi Farm"))," \u2014 Re-created E-Commerce website selling fruits for a Japanese Farm. I created both ",r.a.createElement("a",{href:"http://shop.oogushi-farm2.co.jp/"},"Oogushi Farm")," and ",r.a.createElement("a",{href:"https://www.gogo-oogushi.com/"},"Oogushi Farm 2"),") "),r.a.createElement("li",null,r.a.createElement("b",null,"Salude"),' \u2014 SheHacks U18 First Place Winner 2019. I designed an application under the theme of "Empowerment" and presented my application to Visa Executives and various entrepreneurs.')))),r.a.createElement(w,null))}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"widecard"},r.a.createElement("div",null,r.a.createElement("h3",null,this.props.title),r.a.createElement("h4",null,this.props.where),r.a.createElement("h4",null,this.props.from," - ",this.props.to)))}}]),t}(n.Component),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).displayEducation=function(){n.setState({displayEducation:!n.state.displayEducation})},n.educationInfo=function(){if(n.props.onClick)return r.a.createElement("div",null,"extra info")},n.state={myAwards:["SheHacks First Place U18 2019","Grade 11 Overall Academic Attainment Award (1 out of 3 from 360 students)","Grade 11 Mathematics Academic Award (1 out of 4 from 360 students)","UKMT Gold 2018 Maths Competition","UKMT Silver 2019 Maths Competition"]},n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row-content"},r.a.createElement("h1",null,"My Education"),r.a.createElement(g,{title:"Bachelor of Science in Mathematics and Computer Science",where:"Harvey Mudd College USA",from:"August 2021",to:"Present"}),r.a.createElement(g,{title:"IB Diploma",where:"United World College of South East Asia Dover",from:"2007",to:"2020"})),r.a.createElement("div",{className:"row-content"},r.a.createElement("h1",null,"Courses I've Taken"),r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://www.coursera.org/account/accomplishments/specialization/certificate/4YU95LCD9VT2"}," DeepLearning.AI TensorFlow Developer Specialization (4 courses)")),r.a.createElement("li",null,r.a.createElement("a",{href:"\nhttps://www.coursera.org/account/accomplishments/specialization/certificate/H6FBGFNCTABJ"},"Mathematics for Machine Learning Specialization (3 courses)")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"\nhttps://www.coursera.org/account/accomplishments/specialization/certificate/VXANGX5UMBL2"},"Deep Learning Specialization (5 courses)")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"\nhttps://www.coursera.org/account/accomplishments/specialization/certificate/BL2E4P4EGSY9"},"Python for Everybody Specialization (5 courses)")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"\nhttps://www.coursera.org/account/accomplishments/certificate/QNKDV9ESPW3J"},"Building Database Applications in PHP")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"\nhttps://www.coursera.org/account/accomplishments/certificate/JW26CMZZT6QN"},"Front-End Web Development with React")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"\nhttps://www.coursera.org/account/accomplishments/certificate/Z4JF2LSWWE6Q"},"Building Web Applications in PHP")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://www.coursera.org/account/accomplishments/certificate/JW26CMZZT6QN"},"Front-End Web UI Frameworks and Tools: Bootstrap 4")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"\nhttps://www.coursera.org/account/accomplishments/certificate/ARC5NHED8Q37"},"Introduction to Programming with MATLAB ")),r.a.createElement("li",null,"Introduction to Mathematical Thinking by Stanford University"))),r.a.createElement(w,null))}}]),t}(n.Component),y=t.p+"static/media/driftice.75101490.jpeg",k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={myskills:["React.js","JavaScript","Python","node.js","Java","PHP","CSS/HTML","SQL","MongoDB"],myAwards:["SheHacks First Place U18 2019","Grade 11 Overall Academic Attainment Award (1 out of 3 from 360 students)","Grade 11 Mathematics Academic Award (1 out of 4 from 360 students)","UKMT Gold 2018 Maths Competition","UKMT Silver 2019 Maths Competition"]},n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("h4",null,"Some of my Gap Year experiences"),r.a.createElement("p",null,"My main goal for my gap year was to experience as many different and exciting things the world has to offer as possible. This included:"),r.a.createElement("ul",null,r.a.createElement("li",null,"A Software Engineer internship at a cryptocurrency brokerage firm"),r.a.createElement("li",null,"Learning how to skateboard. I soon became a regular at the skateparks in Singapore!"),r.a.createElement("li",null,"Worked at ",r.a.createElement("a",{href:"https://rusutsu.com/en/"},"Rusutsu")," ski resort in Hokkaido, Japan for 3 months. Now, I cannot stop dreaming about the next time I will get to go snowboarding!"),r.a.createElement("li",null,"Paragliding in Kyoto, Japan. "),r.a.createElement("li",null,"Executing a solo expedition around northern Hokkaido, Japan. I swam in arctic drift ice, visited an ice village, and led a self-guided local food tour. "),r.a.createElement("li",null,"Surfing in coastal Japan. (I can now stand!)"),r.a.createElement("li",null,"Backpacking around Osaka and Kyoto. Having grown up outside of my home country, Japan, this was especially meaningful to me as I got to reconnect with my roots. "),r.a.createElement("li",null,"Experimenting with vegan and vegetarian cooking. I even convinced my parents to try my adventurous recipes of colorful beans and ancient grains! "),r.a.createElement("li",null,"Getting my Manual Driver's License."),r.a.createElement("li",null,"Volunteering at an apple farm that aims to revolutionize traditional Japanese farming with technology. I created ",r.a.createElement("a",{href:"https://www.instagram.com/p/CICq4aEjfLo/"},"social media content")," to promote the farm. Click on these links to ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=thGnQ6msE78&t=74s"},"pick apples with me")," and ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=k_v5xKGXWWw&t=165s"},"walk around the farm with me.")))),r.a.createElement("div",{className:"col-12 col-md-4"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:y,alt:"driftice",className:"img-fluid"}),r.a.createElement("span",null,"The surreal Northern Hokkaido Drift Ice"))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col col-md-12"},r.a.createElement("h4",null,"Ethical Eating"),r.a.createElement("p",null,"When I turned 18, I became a vegetarian. I have spent the past two years plunging into the ethics of environmentally friendly eating and nutritional science. It is deeply important to me that I view this change as a choice. As such, for every meat product I have chosen not to consume, I have found 2-3 new foods to taste and incorporate into my diet."),r.a.createElement("p",null,"I have now become the designated restaurant finder for my friends and have continuously surprised them with elusively meaty but 100% veggie food. Over the past few months, I have warmly welcomed two of my friends into the world of vegetarianism."))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col col-md-12"},r.a.createElement("h4",null,"I also love documentaries and historical dramas. "),r.a.createElement("p",null,"Here are some of my favorites:"),r.a.createElement("ul",null,r.a.createElement("li",null,"The Great"),r.a.createElement("li",null,"Planet of The Humans"),r.a.createElement("li",null,"The Need to Grow"),r.a.createElement("li",null,"Misbehaviour"),r.a.createElement("li",null,"The Suffragettes"),r.a.createElement("li",null,"Seaconspiracy")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col col-md-12"},r.a.createElement("h4",null,"I also ",r.a.createElement("a",{href:"https://medium.com/@karinawalker"},"write.")))),r.a.createElement(w,null))}}]),t}(n.Component),I=t(19),N=t(3);var j=function(){return r.a.createElement(I.HashRouter,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(N.g,null,r.a.createElement(N.d,{exact:!0,path:"/about"},r.a.createElement(v,null)),r.a.createElement(N.d,{path:"/interests"},r.a.createElement(k,null)),r.a.createElement(N.d,{path:"/education"},r.a.createElement(b,null)),r.a.createElement(N.d,{path:"/"},r.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(51),t(52),t(53);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.3ca6b9a6.chunk.js.map