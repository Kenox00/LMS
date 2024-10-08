# Generated by Django 5.0.4 on 2024-10-01 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='librarian',
            old_name='first_name',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='librarian',
            old_name='last_name',
            new_name='username',
        ),
        migrations.RemoveField(
            model_name='librarian',
            name='librarian_id',
        ),
        migrations.RemoveField(
            model_name='students',
            name='student_id',
        ),
        migrations.AddField(
            model_name='librarian',
            name='id',
            field=models.BigAutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='students',
            name='id',
            field=models.BigAutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]
