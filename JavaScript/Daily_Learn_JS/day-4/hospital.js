let Hospitals={

     Hospital1:{
        
        HospitalDetails:{

            name: 'Krishna Hospital',
            Mono: '9322864133',
            address:"Near Zeal Campus narhe pune 411041"
        },

        Specialist:{

            // Specialist
            Neurology:{

                image1:'neurolgy image',
                overview:'Description',
                
                facts:{

                    factname1: 'stroke',
                    image2:'stroke image',
                    overview:'description', 
                },

                // Doctor Specialist
                DoctorsSpecilist:{

                    Doctor1:{

                        name: 'Doctor name',
                        image3: 'Doctor image',
                        mono: '9322864112',
                        specilsit:'Brain Specialist',
                        
                        appointment:{

                            patient_name: 'xyz name',
                            patient_mono:'9119192829',
                        }
                    }
                    // multiple doctors

                },

                // Reviews 
                Reviews:{

                    name1:'feedback person name',
                    description:'description feedback',
                    starCount:'user Enter Count' // 1,2,3,4,5
                }

                // location , 
            }
        }, 

        // Find a doctor mutliple soctor

        FindDoctor:{

            doctor1Details:{

                name:'Ajay Bhosle',
                image: 'image1',
                specialist: 'Neurologist',
                mono:'91233334221'
            }

            // mutliple doctor

        },

        // Book an appointment

        bookAppointment:{

            patientname: 'patient name',
            age: 23,
            patientDisease: 'heart problem',
            Address: 'xyz Address'

        },

        // Room Category

        Room_category:{

            luxuaryRoom:{

                name:'luxuaryRoom',
                image1: 'image1',
                image2: 'image2',
                
                bookingSystem:{

                    patientname: 'patient name',
                    age: 23,
                    patientDisease: 'heart problem',
                    Address: 'xyz Address',
                    payment: '2000 rs'
        
                }

            },
            
            semiPrivate:{
                name:'semiprivate',
                image1: 'image1',
                image2: 'image2',
                
                bookingSystem:{

                    patientname: 'patient name',
                    age: 17,
                    patientDisease: 'heart problem',
                    Address: 'xyz Address',
                    payment: '1500 rs'
        
                }

            },

            genearl_Ward:{
                name:'genearl Ward',
                image1: 'image1',
                image2: 'image2',
                
                bookingSystem:{

                    patientname: 'patient name',
                    age: 27,
                    patientDisease: 'heart problem',
                    Address: 'xyz Address',
                    payment: '1000 rs'
        
                }
            },

            // Emergency call

            EmergencyCall:{

                krishuHospital:{
                
                    hospitalname: 'krishu hospital',
                    hospitalAddress:'near narhe',
                    mono:'12345656766'
                },

                vivHospital:{
                 
                    hospitalname: 'viv hospital',
                    hospitalAddress:'near Ambegaon bk',
                    mono:'12345656766'

                }

                // multiple hospital
            }
        }
    }
}

function addHospital(name){

    Hospitals.Hospital1.HospitalDetails[name]={name}

}


addHospital('Viv Hospital')
console.log(Hospitals.Hospital1.HospitalDetails['Viv Hospital'])

