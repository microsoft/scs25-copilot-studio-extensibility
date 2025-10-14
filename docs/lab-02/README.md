# Lab 02 - Build an agent with Copilot Studio

## Overview

Create a comprehensive Copilot Studio agent that demonstrates core extensibility features including knowledge sources, adaptive cards, and intelligent prompting.

## Learning Objectives

- Create and configure a Copilot Studio agent
- Implement multiple knowledge sources (Dataverse and external content)
- Build adaptive cards for interactive experiences
- Configure intelligent prompts for specialized scenarios

## Prerequisites

- Completion of Lab 00 (Setup)
- Access to Copilot Studio and Dataverse
- Sample data files from setup lab

## Lab Duration

⏱️ **Estimated time:** 75 minutes

- 15 minutes: Presentation
- 60 minutes: Hands-on implementation

## What You'll Build

A multi-functional IT Help Desk agent with:

- 📊 **Supplier knowledge source** (Dataverse + Excel)
- 🍎 **MacOS support queries** (Microsoft Learn integration)  
- 🛒 **Device ordering system** (Adaptive cards with Dataverse)
- 🔧 **Error code assistance** (AI-powered prompts)

## Exercises

### Exercise 1: Create Your Agent Foundation

1. Open Copilot Studio
2. Create a new agent named "IT Help Desk Assistant"
3. Configure basic agent settings and personality
4. Test initial conversation flow

### Exercise 2: Add Knowledge Sources

#### 2a: Supplier Information (Dataverse + Excel)

1. Import supplier data to Dataverse:
   - Create `Suppliers` table in Dataverse
   - Import data from `suppliers.xlsx`
2. Configure knowledge source in Copilot Studio:
   - Connect to Dataverse `Suppliers` entity
   - Test supplier information queries

#### 2b: MacOS Support (Microsoft Learn)

1. Add Microsoft Learn as knowledge source
2. Configure filtering for MacOS-related content
3. Test queries: "Is service X supported on MacOS?"
4. Validate response accuracy and citations

### Exercise 3: Device Ordering with Adaptive Cards

1. Set up Device entity in Dataverse:
   - Import device catalog from `devices.json`
   - Configure device attributes (name, price, category, availability)
2. Create device ordering topic:
   - Design adaptive card for device selection
   - Implement order confirmation flow
   - Connect to Dataverse for real-time inventory
3. Test complete ordering workflow

### Exercise 4: AI-Powered Error Code Assistant

1. Create error code topic with intelligent prompting
2. Configure LLM prompt for error code interpretation:
3. Test with various error codes from `error-codes.csv`
4. Refine prompts based on response quality

## Testing Scenarios

### Knowledge Source Testing

- "Who are our approved laptop suppliers?"
- "Is Microsoft Teams supported on MacOS Ventura?"
- "Find suppliers in the UK"

### Device Ordering Testing

- "I need to order a new laptop"
- "Show me available tablets under $800"
- "Order 5 wireless mice for the marketing team"

### Error Code Testing

- "What does error code 0x80004005 mean?"
- "Help me fix BSOD error 0x000000D1"
- "Troubleshoot network error 651"

## Best Practices Implemented

- **Conversation Design**: Natural, helpful agent personality
- **Knowledge Management**: Diverse, reliable information sources  
- **User Experience**: Interactive cards for complex workflows
- **AI Integration**: Context-aware intelligent responses

## Troubleshooting

### Common Issues

- **Knowledge source not responding**: Check Dataverse connection and permissions
- **Adaptive cards not displaying**: Verify card JSON syntax and schema
- **Prompts giving generic answers**: Refine prompt engineering with specific examples
- **Slow response times**: Optimize knowledge source queries

### Debug Tips

- Use Test Panel to validate each component
- Check conversation logs for errors
- Verify data source connectivity
- Test prompts in isolation before integration

## Success Criteria

By the end of this lab, your agent should:

- ✅ Answer supplier questions from Dataverse
- ✅ Provide MacOS support information from Microsoft Learn
- ✅ Process device orders through adaptive cards
- ✅ Interpret error codes with helpful guidance
- ✅ Maintain natural conversation flow

## Next Steps

Continue to [Lab 02: Build Connector and Add Action](../lab-03/README.md)

---
*Your agent is now ready for advanced extensibility! Next, we'll add custom connector capabilities.*
