---
title: Edit and remove children in dynamics
description: Providing the choice to edit a child (children) details in dynamics as well as removing their details.
date: 2022-02-18
---

**Providing the choice to edit a child (children) details in dynamics as well as removing their details.**

## What are we wanting to improve?
We are wanting to give CCS more control over the children details within dynamics, the process for having a childs details updated or even removing the childs details completely is rather lengthy process as they need to raise a request with the live support to have these changes made on the claim. 

Giving CCS more control over this will reduce the wait time for beneficiaries to receive their updated payment as well as making the process a lot easier for the CCS staff. 

## What are our user needs?
The user research which has been conducted with CCS staff shows that there is a need for more control over the children details and having the freedom to amend these details themselves, whether it be to view more information, add, edit or remove the childs details.

## What we have done so far?
We now have a design in place on the prototype, the option to edit a childs details by first viewing the children on the claim and then having the option to click 'Change' next to the childs details which need amending, this will then open the edit view for the children on the claim allowing changes to be made. 

We have also now got the option to 'Remove' a child from the claim, this is done by selecting the remove link next to the child, once this is clicked the user will be prompt with a sort of saftey blanket which will confirm that they want to remove the childs details, allowing the user to proceed with the action or cancel.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Edit children",
      img: { src: "edit-children.png" }
    }, {
      text: "Remove child",
      img: { src: "remove-child.png" }
    }]
}) }}

## Related posts
* [Adding and viewing children in dynamics](/Beta-phase/add-view-child-dynamics/)
