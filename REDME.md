## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
      getElementById:
            1.Selects an element by ID
            2.Returns only one element 
            3.Very fast 
            4.ID must be unique

      getElementByClassName:
            1.Selects elements by class name
            2.Returns an HTMLCollection
            3.Can return multiple elements
            4.It is a live collection 
 
      querySelector:
             1.Uses CSS selectors
             2.Returns only the first matching element
             3.More flexibl
     
     querySelectorAll:
             1.Uses CSS selectors
             2.Returns all matching elements
             3.Returns a NodeList
             4.It is a static collection
      


### 2. How do you create and insert a new element into the DOM?

Ans:
     To create and insert a new element into the DOM:
           1.Use document.createElement() to create the element.
           2.Add content or attributes if needed.
           3.Use appendChild() (or append()) to insert it into a parent element.



### 3. What is Event Bubbling? And how does it work?

Ans:
     Event bubbling is a DOM behavior where an event starts on the target element and then moves upward through its parent elements.


     How it works:
         When an event (like a click) happens on an element, it first runs on that element, then propagates to its parent, then to the grandparent, and continues up to the document.



### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
      Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding listeners to multiple child elements.

      It works using event bubbling, where the event bubbles up from the child to the parent.

        Why it is useful:
        Improves performance (fewer event listeners)
        Works for dynamically added elements
        Makes code cleaner and easier to manage


### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
         Difference between preventDefault() and stopPropagation()

            1.preventDefault() prevents the browser’s default action for an event.

            2.Example: Stopping a form from submitting or preventing a link from navigating.

            3.stopPropagation() prevents the event from propagating (bubbling) to parent elements in the DOM.
