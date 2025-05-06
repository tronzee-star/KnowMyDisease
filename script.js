const diseases = {
  "diabetes": {
    description: "A chronic condition that affects how your body turns food into energy.",
    symptoms: "Increased thirst, frequent urination, extreme fatigue.",
    causes: "Genetics, lifestyle factors like diet and physical inactivity.",
    medication: "Insulin, Metformin, lifestyle changes."
  },
  "hypertension": {
    description: "A condition in which the force of the blood against the artery walls is too high.",
    symptoms: "Often none, but can include headaches or shortness of breath.",
    causes: "Genetics, stress, poor diet, lack of exercise.",
    medication: "ACE inhibitors, Beta-blockers, lifestyle modifications."
  },
  "asthma": {
    description: "A condition in which your airways narrow and swell and may produce extra mucus.",
    symptoms: "Shortness of breath, wheezing, coughing.",
    causes: "Allergies, air pollution, respiratory infections.",
    medication: "Inhalers, corticosteroids, bronchodilators."
  },
  "malaria": {
    description: "A mosquito-borne infectious disease that affects humans and animals.",
    symptoms: "Fever, chills, sweating, headache.",
    causes: "Plasmodium parasite spread by Anopheles mosquitoes.",
    medication: "Chloroquine, Artemisinin-based combination therapies."
  },
  "covid-19": {
    description: "A contagious respiratory illness caused by the SARS-CoV-2 virus.",
    symptoms: "Fever, cough, loss of taste/smell, fatigue.",
    causes: "Spread through respiratory droplets from infected individuals.",
    medication: "Antivirals, rest, supportive care."
  },
  "tuberculosis": {
    description: "A potentially serious infectious bacterial disease that mainly affects the lungs.",
    symptoms: "Cough (sometimes with blood), weight loss, night sweats, fever.",
    causes: "Caused by Mycobacterium tuberculosis, spreads through the air.",
    medication: "Isoniazid, Rifampin, Ethambutol, Pyrazinamide."
  },
  "hepatitis b": {
    description: "A serious liver infection caused by the hepatitis B virus (HBV).",
    symptoms: "Abdominal pain, dark urine, fever, joint pain, jaundice.",
    causes: "Contact with infectious body fluids.",
    medication: "Antiviral drugs like Entecavir and Tenofovir."
  },
  "dengue": {
    description: "A mosquito-borne viral infection causing flu-like illness.",
    symptoms: "High fever, rash, muscle and joint pain, headache.",
    causes: "Spread by Aedes mosquitoes infected with dengue virus.",
    medication: "No specific treatment; supportive care like fluids and pain relievers."
  },
  "chickenpox": {
    description: "A highly contagious viral infection causing an itchy, blister-like rash.",
    symptoms: "Fever, tiredness, loss of appetite, rash with itchy blisters.",
    causes: "Caused by varicella-zoster virus.",
    medication: "Antihistamines, antiviral drugs like Acyclovir."
  },
  "measles": {
    description: "A highly contagious virus that lives in the nose and throat mucus.",
    symptoms: "Fever, cough, runny nose, inflamed eyes, skin rash.",
    causes: "Spread by respiratory droplets or direct contact with infected nasal secretions.",
    medication: "No specific antiviral treatment; supportive care only."
  }
};

  function searchDisease() {
    const input = document.getElementById("diseaseInput").value.toLowerCase();
    const output = document.getElementById("output");

    if (diseases[input]) {
      const d = diseases[input];
      output.innerHTML = `
        <h2>Description</h2><p>${d.description}</p>
        <h2>Symptoms</h2><p>${d.symptoms}</p>
        <h2>Causes</h2><p>${d.causes}</p>
        <h2>Medication</h2><p>${d.medication}</p>
      `;
    } else {
      output.innerHTML = `<p style="color:red">Disease not found. Please check the spelling or try another.</p>`;
    }
  }

  function navigate(section) {
    document.getElementById("home").style.display = section === 'home' ? 'block' : 'none';
    document.getElementById("list").style.display = section === 'list' ? 'block' : 'none';
    document.getElementById("about").style.display = section === 'about' ? 'block' : 'none';
  }