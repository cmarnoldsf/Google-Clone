// There was an extra comma at the end of multiList array.
// HTML & CSS Skills Quiz Info below.
$( function($){
	var quizMulti = {
    multiList: [
    // question 1
    {
       ques: "Which is the correct tag for a paragraph:",
        ans: "<p>",
        ansSel: ["<pa>", "<para>", "<pg>"]
    },
    // question 2
    {
       ques: "What is the correct code for a line break in XHTML:",
        ans: "<br />",
        ansSel: ["<lb />", "<li>", "<libr>"]
    },
    // question 3
    {
       ques: "Which is the correct format for an HTML attribute:",
        ans: "name='value'",
        ansSel: ["value=name", "name=value", "name:value"]
    },
    // question 4
    {
       ques: "Where does meta information reside:",
        ans: "<head>",
        ansSel: ["<body>", "<mt>", "<info>"]
    },
    // question 5
    {
       ques: "What tag attaches an external CSS sheet to a HTML document:",
        ans: "<link>",
        ansSel: ["<css>", "<import>", "<style>"]
    },
    // question 6
    {
       ques: "Which is the largest header of the following, by default:",
        ans: "<h1>",
        ansSel: ["<h2>", "<h5>", "<h6>"]
    },
    // question 7
    {
       ques: "What is the correct syntax for a comment in HTML:",
        ans: "<!-- comment goes here -->",
        ansSel: ["!-- comment goes here --", "<-- comment goes here -->", "/* comment goes here */"]
    },
    // question 8
    {
       ques: "What is the special character for a copyright symbol:",
        ans: "&copy;",
        ansSel: ["&copyright;", "copy&;", "&(copy);&"]
    },
    // question 9
    {
       ques: "Which tag represents a list item:",
        ans: "<li>",
        ansSel: ["<ul>", "<lis>", "<list>"]
    },
    // question 10
    {
       ques: "Which of the following represents the tag for a hyperlink:",
        ans: "<a>",
        ansSel: ["<link>", "<li>", "<hyper>"]
    },
    // question 11
    {
       ques: "Which of the following HTML attributes is used to point a link to the proper location:",
        ans: "href",
        ansSel: ["src", "link", "anchor"]
    },
    // question 12
    {
       ques: "Which of the following is a properly coded absolute url:",
        ans: "page-1-absolute.html",
        ansSel: ["page-1.html", "www.bavc.org", "http://www.bavc.org"]
    },
    // question 13
    {
       ques: "To add a photo to your page what tag would you use in HTML:",
        ans: "<img>",
        ansSel: ["<pic>", "<image>", "<photo>"]
    },
    // question 14
    {
       ques: "What graphic format is best suited for a 2 color logo on the web:",
        ans: "GIF",
        ansSel: ["JPG", "PNG", "AI"]
    },
    // question 15
    {
       ques: "Which of the following is an example of a Tag selector:",
        ans: "h1",
        ansSel: ["pic", "#tag'", "#tagSelect"]
    },
    // question 16
    {
       ques: "Which CSS property affects the font color of your page:",
        ans: "color",
        ansSel: ["font-color", "text-color", "color-font"]
    },
    // question 17
    {
       ques: "What tag is used to place inline style:",
        ans: "<style>",
        ansSel: ["<inline>", "<css>", "<link>"]
    },
    // question 18
    {
       ques: "Which tag creates a region or division of your page:",
        ans: "<div>",
        ansSel: ["<area", "<col>", "<head>"]
    },
    // question 19
    {
       ques: "How many times can an ID be used per page:",
        ans: "1",
        ansSel: ["4", "99", "Unlimited"]
    },
    // question 20
    {
       ques: "How many times can a class be used per page:",
        ans: "Unlimited",
        ansSel: ["4", "99", "1"]
    },
    // question 21
    {
       ques: "Which symbol represents ID in CSS:",
        ans: "# (pound sign)",
        ansSel: [" . (period)", "id=", "#id"]
    },
    // question 22
    {
       ques: "Which symbol represents class in CSS:",
        ans: ". (period)",
        ansSel: ["# (pound sign)", "class", "$class"]
    },
    // question 23
    {
       ques: " What is the shorthand property for background:",
        ans: "background",
        ansSel: ["background-image", "bg", "bg-all"]
    },
    // question 24
    {
       ques: "What tag holds your page content:",
        ans: "<body>",
        ansSel: ["<page>", "<content>", "<head>"]
    },
    // question 25
    {
       ques: "What is the proper code for a text field:",
        ans: "<input type='textfield' />",
        ansSel: ["<textfield></textfield>", "<input>textfield</input>", "<textfield />"]
    }
    ]
	};
	options = {
		help: "Further information can be found at <a href='introduction/'>Introductory Lesson</a>. You can go through the lesson again if you struggle with this quiz.",
		showHTML: true,
		animationType: 2,
		showWrongAns: true
};
$("#quizArea").jQuizMe(quizMulti, options);
});