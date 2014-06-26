// There was an extra comma at the end of multiList array.
// Photoshop Quiz Info below.
$( function($){
	var quizMulti = {
    multiList: [
    // question 1
    {
       ques: "The keyboard shortcut to create a new layer is:",
        ans: "Cmd-Shift-N (Windows: Ctrl-Shift-N)",
        ansSel: ["Cmd-N (Windows: Ctrl-N)", "Ctrl-clicking on the image (Windows: Right-clicking on the image)", "Cmd-Opt-N (Windows: Ctrl-Alt-N)"]
    },
    // question 2
    {
       ques: "To draw a custom-shape selection, use:",
        ans: "Lasso Tool",
        ansSel: ["Magic Wand tool", "Custom Shape tool", "Extract filter"]
    },
    // question 3
    {
       ques: "What is the keyboard shortcut for Free Transform mode?",
        ans: "Cmd-T (Windows: Ctrl-T)",
        ansSel: ["Cmd-F (Windows: Ctrl-F)	", "Cmd-Q (Windows: Ctrl-Q)", "Cmd-A (Windows: Ctrl-A)"]
    },
    // question 4
    {
       ques: "Which of the following is NOT a palette?",
        ans: "Groups",
        ansSel: ["Channels", "Color", "Swatches"]
    },
    // question 5
    {
       ques: "To turn the visibilty of a layer off:",
        ans: "Click on the Eye switch in the Layers Palette",
        ansSel: ["Choose Hide Layer from the View menu", "Click on the Trashcan icon on the Layers palette", "Use the Opacity tool"]
    },
    // question 6
    {
       ques: "To scale a layer, use:",
        ans: "Transform mode",
        ansSel: ["Image Size", "Crop tool", "Zoom tool"]
    },
    // question 7
    {
       ques: "Which of the following can NOT be used to make a sepia-toned image?",
        ans: "Replace Color adjustment",
        ansSel: ["Black and White adjustment", "Hue/Saturation adjustment", "Mix Color Channels adjustment"]
    },
    // question 8
    {
       ques: "Which of the following is NOT a vector graphic?",
        ans: "Paint stroke",
        ansSel: ["Circle shape layer", "Text", "Line Shape Layer"]
    },
    // question 9
    {
       ques: "The Pen tool is used to:",
        ans: "Draw a path",
        ansSel: ["Draw a line", "Crop an image", "Make a correction to part of an image"]
    },
    // question 10
    {
       ques: "Which of the following does NOT fill an area with a solid color?",
        ans: "Healing Brush tool",
        ansSel: ["Paint Bucket tool", "Choosing Fill from the Edit menu", "Making a shape with one of the Shape tools"]
    },
    // question 11
    {
       ques: "To toggle the cursor from looking like the selected tool to displaying as cross hairs, choose the following cursor preference:",
        ans: "Precise",
        ansSel: ["Standard", "Brush size", "Bulls-eye"]
    },
    // question 12
    {
       ques: "The Crop tool can be used to:",
        ans: "Trim an image",
        ansSel: ["Make a selection", "Slice an image", "Change the opacity of an image"]
    },
    // question 13
    {
       ques: "When using the clone tool, how do you select the area that you wish to clone from:",
        ans: "Opt-click (windows: Alt-click)",
        ansSel: ["Ctrl-click (Windows: Right-click)", "Cmd-click (Windows: Ctrl-click)", "Cmd-opt-click (Windows: Ctrl-alt-click)"]
    },
    // question 14
    {
       ques: "You can paint a selection by using:",
        ans: "Quick Mask mode",
        ansSel: ["Magic Wand tool", "Lasso tool", "Adjustment layer"]
    },
    // question 15
    {
       ques: "Palettes can be displayed using which menu?",
        ans: "Windows menu",
        ansSel: ["Filter menu", "Analysis menu", "View Menu"]
    },
    // question 16
    {
       ques: "Which palette can be used to set the Blend Mode of a layer?",
        ans: "Layers palette",
        ansSel: ["Channels palette", "Swatches palette", "Color palette"]
    },
    // question 17
    {
       ques: "Which tool darkens areas of an image?",
        ans: "Burn tool",
        ansSel: ["Dodge tool", "Blur tool", "Sponge tool"]
    },
    // question 18
    {
       ques: "A scanned photograph is what kind of image?",
        ans: "Raster",
        ansSel: ["Vector", "Template", "Guide"]
    },
    // question 19
    {
       ques: "Which of the following is not a color mode in Photoshop?",
        ans: "HSL",
        ansSel: ["RGB", "Lab", "CMYK"]
    },
    // question 20
    {
       ques: "Extract is used to:",
        ans: "Delete unwanted areas of an image",
        ansSel: ["Remove selected colors from an image", "Save a new channel based on a selection", "Crop an image"]
    },
    // question 21
    {
       ques: "Which of the following color modes has only 256 colors?",
        ans: "Indexed",
        ansSel: ["Lab", "Multichannel", "CMYK"]
    },
    // question 22
    {
       ques: "Which of the following is used to make a selection?",
        ans: "Magic Wand tool",
        ansSel: ["Clone tool", "Crop tool", "Move tool"]
    },
    // question 23
    {
       ques: "The History Palette is used to:",
        ans: "Revert to earlier stages of your work",
        ansSel: ["Record an action in order to repeat it", "Create a new tool Preset", "Save favorites as templates"]
    },
    // question 24
    {
       ques: "To see how much red is in an RGB image, use:",
        ans: "Channels palette",
        ansSel: ["Quickmask Mode", "Status Bar", "Options palette"]
    },
    // question 25
    {
       ques: "How do you make a new channel?",
        ans: "After making a selection, use the Save Selection command in the Selection menu",
        ansSel: ["Select New Channel from the Selections menu", "Select New Channel from the Image menu", "Create a path using the Pen tool"]
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