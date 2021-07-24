const Send_Email_contact = () => {
    let formData = new FormData();

    const name = $('#name').val();
    const usn = $('#usn').val();
    const branch = $('#branch').val();
    const semester = $('#semester').val();
    const emailfrom = $('#emailfrom').val();
    const subj = $('#subj').val();
    const message_post = $('#message_post').val();



    const emailobject = {
        emailto: 'bmscegpacalculator@gmail.com',

        body: `<div style="border: 2px solid black; border-radius: 1rem;padding: 1rem;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1 style="text-align: center;text-decoration: underline;color: #0088cc;">BMSCE GRADE POINT CALCULATOR</h1>
    
        <hr>
        <h3 style='display:block;'><u style="color: #0088cc;">SENDERS EMAIL :-</u><br>${emailfrom}
        </h3>
        <hr>
        <h3 style='display:block;color:black;'><u style="color: #0088cc;">MESSAGE :-</u><br>${message_post}</h3>
    
        <hr>
        <h3 style='display:block;color: #0088cc;text-decoration: underline;'>STUDENT DETAILS</h3>
        <h4>STUDENT NAME : ${name}</h4>
        <h4>USN : ${usn}</h4>
        <h4>BRANCH : ${branch}</h4>
        <h4>SEMESTER : ${semester}</h4>
        <hr>
    
    </div>
                   `,

        subject: subj,

    }
    formData.append('emailobject', JSON.stringify(emailobject));
    $.ajax({
        url: '/sendemail',
        type: 'POST',
        datatype: 'json',
        processData: false,
        contentType: false,
        data: formData,
        success: (response) => {
            console.log(response);

        },
        error: (error) => {
            console.log(error.message);
        }
    })
}

const Send_Email = () => {
    let formData = new FormData();
    const to = $('#emailto').val();
    const name = $('#name').val();
    const usn = $('#usn').val();
    const branch = $('#branch').val();
    const semester = $('#semester').val();
    const attachmentlist = $('#email_attachments').get(0).dropzone;
    const files = attachmentlist.files;
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
    }

    const emailobject = {
        emailto: to,
        body: ` <div style="border: 2px solid black; border-radius: 1rem;padding: 1rem;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1 style="text-align: center;text-decoration: underline;color: #0088cc;">BMSCE GRADE POINT CALCULATOR</h1>
        <h2 style='display:block;text-align: center;'>HELLO, ${name},</h2>
        <hr>
        <h3>Thanks for using our "BMSCE GRADE POINT CALCULATOR" and Showing Interest In our application. We hope you loved the Features Provided.</h3>
        <h3>Below We have Attached Your Grade Card. You can Download it from there. We hope you liked it and visit our site again. </h3>

        <hr>
        <h3 style='display:block;color: #0088cc;text-decoration: underline;'>STUDENT DETAILS</h3>
        <h4>NAME : ${name}</h4>
        <h4>USN : ${usn}</h4>
        <h4>BRANCH : ${branch}</h4>
        <h4>SEMESTER : ${semester}</h4>
        <hr>
        <h3>&#x1F6C8; Please Do not reply to this Mail Directly If you have any Questions/Feedback to give. Please Post it on our site. <a href="bmsce-gpcalculator.herokuapp.com" style="color: #0088cc;text-decoration: underline;">GP CALCULATOR</a>.</h3>
        <h3>&#169; Copyright. All rights Reserved.</h3>
        <hr>
        <h3>Thanks,</h3>
        <h3 style="color: #0088cc;">BMSCE GRADE POINT CALCULATOR.</h3>
    </div>
            `,

        subject: `GRADE CARD FROM GP CALCULATOR - ${name}, ${usn}`,

    }
    formData.append('emailobject', JSON.stringify(emailobject));
    $.ajax({
        url: '/sendemail',
        type: 'POST',
        datatype: 'json',
        processData: false,
        contentType: false,
        data: formData,
        success: (response) => {
            console.log(response);

        },
        error: (error) => {
            console.log(error.message);
        }
    })
}