# Arch Angel
## Overview
Done for a smarthome hackathon. This is the voice activated control side of things. Another

Arch Angel is a voice activated app that seeks to improve the lives of the disabled and elderly. 
The app seeks to empower caretakers by offering an easy to use voice interface to do home automation
without writing code.

# Features 
## Voice Activated Panic Button

The app provides a voice activated panic button. It is essential for users to be able to call for help in an
emergency at all times. Often in hospitals, retirement homes, the panic buttons are placed at walls. Suppose
if the vulnerable were to fall in the middle of the room it would be too difficult for them to reach the walls.
Having a voice activated panic button / distress call using google home / alexa or other voice activated
device would be very handy.

## Spatial Context Awareness / Voice Guided Programming 
Using computer vision (YOLOnet for bounding boxes), we are able to track a room and to segment the room into 
various spatial zones. For example, if sofa were a zone we could set a command eg. "When I am at the sofa,
turn on the lights". Interfacing with [IFTTT](https://ifttt.com/), we are able to provide an intuitive to use
home automation programming system that uses natural language.

