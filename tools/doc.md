# Example Component

Inside the component, the user can define the interaction ports the component supports (i.e. any `publisher`, `subscriber`, `client`, and `server` objects), by dragging and dropping them into the component's canvas.  The relevant `Message` or `Service` pointers for these objects can be defined by either creating the port by dragging the relevant `Message` or `Service` object from the `Tree Browser` into the canvas and selecting the appropriate port type from the pop-up dialog or by dragging the `Message` or `Service` object onto the relevant `Pointer` of the already created port.  Alternatively, the `Message` or `Service` object can be dragged on to the port in the canvas.

For `Subscribers`, `Servers`, and `Timers`, you can edit the `Operation` which gets executed on behalf of the object by double clicking on the object to open a `CodeEditor` with the operation code.

## Logging

Components are provided with an easy to use timestamped logging framework through their built-in `logger` object pointer. The `logger` object maintains a file buffer for the component which is independent of all other component logs in the system. The user can use the logger within any component code as such:

```
logger->log(<message name>, <message format string>, ...);
```

similarly to `printf`, e.g.

```
this->altitude = 100.0f;
this->pitch = 50.0f; 
this->roll = 15.0f; 
this->yaw = 20.0f;
logger->log("Sensed current altitude and attitude!");
logger->log("Altitude", "%f", this->altitude);
logger->log("Pitch", "%f", this->pitch);
logger->log("Roll", "%f", this->roll);
logger->log("Yaw", "%f", this->yaw);
```

In this case, both *Altitude* and *Orientation* would be in the same log file (since they were in the same component) but would show up as:

```
ROSMOD::<timestamp 1>::Sensed Current altitude and Attitude
ROSMOD::<timestamp 2>::Altitude::100.0
ROSMOD::<timestamp 3>::Pitch::50.0
ROSMOD::<timestamp 4>::Roll::15.0
ROSMOD::<timestamp 5>::Yaw::20.0
```

### Automatic Log Plotting

Most importantly, any data logged will be automatically plotted in the `Results Visualizer` after running an `Experiment`. Any data that can be parsed numerically (e.g. the *Altitude, Pitch, Roll, Yaw* values above), will be **plotted** according to their timestamps. Any data that cannot be parsed numerically, e.g. the first textual log, will be added to the plot as an **annotation** that the user can click to toggle the display of the text.

## Timers

Inside this aspect is where the user can specify the c++ code that will execute upon the expiry of the relevant `timer`, or when relevant data is received for a `subscriber` or `server`. The attributes for the ports and timers can be specified in this aspect as well. These attributes include the `period` of the `timer` or the `deadline` of the subscriber operation, for instance.

## Libraries

Also inside this aspect is where the user can select the `Set Editor` visualizer, which allows the user to see or configure the _set_ of **Libraries** that the component requires for compilation/execution. The user can drag a `Source Library` or `System Library` from the `Tree Browser` to into the `Libraries` Set Editor to add the library as a requirement for the component.

## Constraints

The user can drag in `constraints` from the `Part Browser` and name them accordingly to specify that the component must be deployed onto a `Host` which has a `Capability` with a name that matches the constraint's name.

## Description

This component acts as an example for an event-triggered component, which only executes when it receives the appropriate `Message` subscription operation or `Service` request.  The c++ code which executes when these operations are triggered can be found in the `Operation` of the respective `subscriber` and `server`.

# Next Steps

Click on the `CodeEditor` visualizer in the upper left to open the available code attributes for this component.  Afterwards, click on the `Model` visualizer to return to this view. When you're done looking at the component code (e.g. `forwards`, `members`, `definitions`, `initialization`), come back here and then go through the `Subscriber`s and `Timer`s of this component to see what they do.
