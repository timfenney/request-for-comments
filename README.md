# A Comment Card / Widget

This repo contains a simple Comment widget to display a Comment to the User, and allow some simple interaction.

### Artistic Liberty

A few liberties were taken with the design. For example, the upvote and downvote icons are colored blue when the User has performed the respective actions (a nod to Youtube). This may not be entirely clear from looking at the component on the page, since any api requests, optimistic updates, etc., are out of scope for this component which pretty much just renders the data it receives.

### React Storybook

`yarn` will install the dependencies.

`yarn storybook` will run the storybook for the project. Pick `CommentCard` from the options at the left to view stories for this component.

There are a few different stories to click on, to see the component in different states. Each story should use `actions` for the click handlers; if you click to upvote, downvote, or reply on a comment, you should see the relevant actions fired in the `Actions` tab under the rendered comment.

If you select the story titled `With Dynamic Variables`, then click on the `Knobs` tab under the rendered component, you can edit the props passed to the component.

### Time

This might seem a little weird, but I thought time in a React app could
be handled via some kind of policy. For reasons of both performance, as well as I/O isolation, it is desirable to not have individual comments firing their own callbacks using `setInterval` or the like (especially if there might be hundreds of them).

For this reason I made both the comment creation time, and the current time, props to be passed to the component.

### Styles

It's pretty clear the styles could use a refactor. Honestly this was my first project using Styled Components, so having heard good things I thought I'd give it a go.

I ran into an issue where for some reason, I wasn't wrapping the components correctly, and so the styles weren't correctly applied. I ended up having to work around such cases, e.g. in `Vote.js`. I'm pretty sure if I worked through it, I could make the code a fair bit more clean.

### Accessibility

What's that? Seriously, this component needs some love in this direction, specifically wrt to the clickable elements. They should probably get a role, maybe a tab index, and keyboard support.

### Testing

There are a few basic tests. There are Unit Tests for the `formatEllapsedTime` function. I'd really like to have gotten more tests going, but I ran out of time.

And since I already did the other assignment option, I figured I could get away with it ;-)

On the bright side, there aren't too many conditionals in this component. I have e.g. a ternary for whether to show the Up or Down icon; since the data to configure these choices are static, and both types are rendered in every comment, I have high confidence that any defect in this functionality should be noticed quickly, even without a test.

On the other hand, for components performing state transitions, talking to apis, etc., I would have no such confidence without attempting to cover all cases with relevant tests.

### Jankiness

I bootstrapped this repo with `create-react-app`, and intended to use it, but then I realized I only really needed react storybook and a test runner.

It deserves a cleanup; however I am out of time (see above).
